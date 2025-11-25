import React, { useState } from 'react';
import {
  ArrowLeft,
  MapPin,
  Heart,
  Layout,
  Grid,
  List,
  Filter,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  X,
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { fontStack } from '../constants/themes';
import LayoutContainer from '../components/LayoutContainer';
import ThemeHeading from '../components/ThemeHeading';
import ThemeText from '../components/ThemeText';

const PROPERTY_DATA = [
  { img: '1600585154340-be6161a56a0c', title: 'Sunny Coast Villa', price: '$2.5M', type: 'SALE', location: 'Beverly Hills, CA', beds: 4, baths: 3 },
  { img: '1600607687939-ce8a6c25118c', title: 'Downtown Duplex', price: '$4,200/mo', type: 'RENT', location: 'New York, NY', beds: 2, baths: 2 },
  { img: '1600566753195-f3831ac137c9', title: 'Forest Retreat', price: '$850k', type: 'SALE', location: 'Portland, OR', beds: 3, baths: 2 },
  { img: '1600210492486-724fe5c67fb0', title: 'Minimal Studio', price: '$1,800/mo', type: 'RENT', location: 'San Francisco, CA', beds: 1, baths: 1 },
  { img: '1600585154526-998d781f5a42', title: 'Victorian Manor', price: '$5.8M', type: 'SALE', location: 'Boston, MA', beds: 6, baths: 4 },
  { img: '1600047509807-c25cd61e6818', title: 'Industrial Loft', price: '$3,500/mo', type: 'RENT', location: 'Chicago, IL', beds: 2, baths: 1 },
  { img: '1600566753086-00f18fb6b3ea', title: 'Lakeside Glass', price: '$1.2M', type: 'SALE', location: 'Seattle, WA', beds: 3, baths: 2 },
  { img: '1600585154340-be6161a56a0c', title: 'Art District Apt', price: '$950k', type: 'SALE', location: 'Los Angeles, CA', beds: 2, baths: 2 },
];

const ViewListings = ({ navigate }) => {
  const { theme } = useTheme();
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [filterType, setFilterType] = useState('ALL'); // 'ALL', 'SALE', 'RENT'
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter properties based on selected filter
  const filteredProperties = filterType === 'ALL' 
    ? PROPERTY_DATA 
    : PROPERTY_DATA.filter(p => p.type === filterType);

  const totalResults = filteredProperties.length;

  return (
    <LayoutContainer className="animate-fadeIn">
      <div className="mb-8">
        <button
          onClick={() => navigate('landing')}
          className={`flex items-center gap-2 text-sm font-bold mb-4 ${theme.textMuted} hover:${theme.textMain}`}
        >
          <ArrowLeft size={16} /> Back to Home
        </button>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <ThemeHeading level={1}>
              Properties
            </ThemeHeading>
            <ThemeText muted>
              Showing {filteredProperties.length} of {PROPERTY_DATA.length} results
              {filterType !== 'ALL' && ` (${filterType} only)`}
            </ThemeText>
          </div>
          <div className="flex gap-2 flex-wrap">
            {/* Layout toggle buttons */}
            <button
              onClick={() => setViewMode('list')}
              className={`p-3 ${theme.corners} transition-all ${
                viewMode === 'list' 
                  ? theme.primary 
                  : `${theme.bgPanel} ${theme.border} ${theme.textMain} hover:bg-gray-100`
              }`}
              title="List view"
            >
              <List size={20} />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-3 ${theme.corners} transition-all ${
                viewMode === 'grid' 
                  ? theme.primary 
                  : `${theme.bgPanel} ${theme.border} ${theme.textMain} hover:bg-gray-100`
              }`}
              title="Grid view"
            >
              <Grid size={20} />
            </button>
            
            {/* Filter dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center gap-2 px-4 py-3 ${theme.bgPanel} ${theme.border} ${theme.corners} ${theme.textMain} hover:bg-gray-50 transition-all`}
                style={fontStack(theme.fontType)}
              >
                <Filter size={18} />
                <span className="text-sm font-bold">
                  {filterType === 'ALL' ? 'All Types' : filterType}
                </span>
                <ChevronDown size={14} className={`ml-1 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </button>
              
              {showFilters && (
                <div className={`absolute top-full right-0 mt-2 w-48 ${theme.bgPanel} ${theme.border} ${theme.corners} ${theme.shadow} z-50 overflow-hidden`}>
                  {['ALL', 'SALE', 'RENT'].map((type) => (
                    <button
                      key={type}
                      onClick={() => {
                        setFilterType(type);
                        setShowFilters(false);
                        setCurrentPage(1);
                      }}
                      className={`w-full text-left px-4 py-3 text-sm font-medium transition-all ${
                        filterType === type 
                          ? `${theme.primary}` 
                          : `${theme.textMain} hover:bg-gray-100`
                      }`}
                      style={fontStack(theme.fontType)}
                    >
                      {type === 'ALL' ? 'All Types' : type === 'SALE' ? 'For Sale' : 'For Rent'}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Active filter tag */}
        {filterType !== 'ALL' && (
          <div className="mt-4 flex items-center gap-2">
            <span className={`text-sm ${theme.textMuted}`}>Active filter:</span>
            <span 
              className={`inline-flex items-center gap-1 px-3 py-1 text-sm font-medium ${theme.bgPanel} ${theme.border} ${theme.corners}`}
              style={fontStack(theme.fontType)}
            >
              {filterType === 'SALE' ? 'For Sale' : 'For Rent'}
              <button 
                onClick={() => setFilterType('ALL')} 
                className={`ml-1 ${theme.textMuted} hover:${theme.textMain}`}
              >
                <X size={14} />
              </button>
            </span>
          </div>
        )}
      </div>

      {/* Properties display */}
      <div className={
        viewMode === 'grid' 
          ? `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`
          : `flex flex-col gap-4`
      }>
        {filteredProperties.map((item, idx) => (
          viewMode === 'grid' ? (
            // Grid view card
            <div
              key={idx}
              onClick={() => navigate('property')}
              className={`group cursor-pointer ${theme.bgPanel} ${theme.corners} ${theme.shadow} ${theme.border} overflow-hidden flex flex-col transition-all hover:-translate-y-1 hover:shadow-xl`}
            >
              <div className="h-56 relative overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-${item.img}?auto=format&fit=crop&w=600&q=80`}
                  alt={item.title}
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    theme.effects?.raw ? 'contrast-125 grayscale' : ''
                  }`}
                  style={theme.effects?.pixel ? { imageRendering: 'pixelated' } : {}}
                />
                <div className="absolute top-3 left-3">
                  <span
                    className={`px-2 py-1 text-xs font-bold ${
                      item.type === 'SALE' ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
                    } backdrop-blur-sm ${theme.corners} border border-white/20`}
                    style={fontStack(theme.fontType)}
                  >
                    {item.type}
                  </span>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <ThemeHeading level={3} className="text-lg mb-1 truncate">
                  {item.title}
                </ThemeHeading>
                <ThemeText muted className="text-xs mb-4 flex items-center gap-1">
                  <MapPin size={12} /> {item.location}
                </ThemeText>
                <div className="mt-auto pt-4 border-t border-dashed border-gray-200 flex justify-between items-center">
                  <span
                    className={`font-bold text-xl ${theme.textMain}`}
                    style={fontStack(theme.fontType)}
                  >
                    {item.price}
                  </span>
                  <Heart size={20} className={`${theme.textMuted} hover:text-red-500 cursor-pointer transition-colors`} />
                </div>
              </div>
            </div>
          ) : (
            // List view row
            <div
              key={idx}
              onClick={() => navigate('property')}
              className={`group cursor-pointer ${theme.bgPanel} ${theme.corners} ${theme.shadow} ${theme.border} overflow-hidden flex flex-row transition-all hover:shadow-lg`}
            >
              <div className="w-48 h-32 shrink-0 relative overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-${item.img}?auto=format&fit=crop&w=300&q=80`}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-2 left-2">
                  <span
                    className={`px-2 py-0.5 text-xs font-bold ${
                      item.type === 'SALE' ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
                    } ${theme.corners}`}
                  >
                    {item.type}
                  </span>
                </div>
              </div>
              <div className="p-4 flex-grow flex flex-col justify-between">
                <div>
                  <ThemeHeading level={3} className="text-lg mb-1">
                    {item.title}
                  </ThemeHeading>
                  <ThemeText muted className="text-sm flex items-center gap-1">
                    <MapPin size={14} /> {item.location}
                  </ThemeText>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span
                    className={`font-bold text-xl ${theme.textMain}`}
                    style={fontStack(theme.fontType)}
                  >
                    {item.price}
                  </span>
                  <div className="flex items-center gap-4 text-sm">
                    <span className={theme.textMuted}>{item.beds} beds</span>
                    <span className={theme.textMuted}>{item.baths} baths</span>
                    <Heart size={18} className={`${theme.textMuted} hover:text-red-500 cursor-pointer transition-colors`} />
                  </div>
                </div>
              </div>
            </div>
          )
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-12">
        <button
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className={`p-2 ${theme.bgPanel} ${theme.border} ${theme.corners} ${theme.textMuted} hover:${theme.textMain} disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          <ChevronLeft size={20} />
        </button>
        {[1, 2, 3, 4, 5].map(page => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`w-10 h-10 flex items-center justify-center font-bold ${theme.corners} transition-all ${
              page === currentPage
                ? theme.primary
                : `${theme.bgPanel} ${theme.border} ${theme.textMain} hover:bg-gray-100`
            }`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage(Math.min(5, currentPage + 1))}
          disabled={currentPage === 5}
          className={`p-2 ${theme.bgPanel} ${theme.border} ${theme.corners} ${theme.textMuted} hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </LayoutContainer>
  );
};

export default ViewListings;
