import React, { useState } from 'react';
import { ArrowLeft, MapPin, Heart, Layout, Grid, Filter, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import LayoutContainer from '../components/LayoutContainer';
import ThemeHeading from '../components/ThemeHeading';
import ThemeText from '../components/ThemeText';
import { fontStack } from '../constants/themes';

const ViewListings = ({ theme, navigate }) => {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <LayoutContainer theme={theme} className="animate-fadeIn">
      <div className="mb-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-4">
          <div>
            <ThemeHeading theme={theme} level={1}>
              Properties
            </ThemeHeading>
            <ThemeText theme={theme} muted>
              Showing 1-8 of 128 results
            </ThemeText>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('list')}
              className={`p-3 ${theme.border} ${theme.corners} transition-all ${
                viewMode === 'list' ? theme.primary : `${theme.bgPanel} ${theme.textMain} hover:opacity-70`
              }`}
            >
              <Layout size={20} />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-3 ${theme.border} ${theme.corners} transition-all ${
                viewMode === 'grid' ? theme.primary : `${theme.bgPanel} ${theme.textMain} hover:opacity-70`
              }`}
            >
              <Grid size={20} />
            </button>
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className={`flex items-center gap-2 px-4 py-2 ${theme.bgPanel} ${theme.border} ${theme.corners} ${theme.textMain} hover:opacity-70 transition-all`}
              style={fontStack(theme.fontType)}
            >
              <Filter size={18} />
              <span className="text-sm font-bold">Filter</span>
              <ChevronDown size={14} className={`ml-2 transition-transform ${filterOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>

        {/* Filter Panel */}
        {filterOpen && (
          <div className={`mt-4 p-6 ${theme.bgPanel} ${theme.border} ${theme.corners} ${theme.shadow} animate-fadeIn`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className={`block text-sm font-bold mb-2 ${theme.textMain}`} style={fontStack(theme.fontType)}>
                  Price Range
                </label>
                <select className={`w-full h-10 px-3 ${theme.corners} ${theme.inputStyle}`} style={fontStack(theme.fontType)}>
                  <option>All Prices</option>
                  <option>Under $500k</option>
                  <option>$500k - $1M</option>
                  <option>$1M - $2M</option>
                  <option>Over $2M</option>
                </select>
              </div>
              <div>
                <label className={`block text-sm font-bold mb-2 ${theme.textMain}`} style={fontStack(theme.fontType)}>
                  Property Type
                </label>
                <select className={`w-full h-10 px-3 ${theme.corners} ${theme.inputStyle}`} style={fontStack(theme.fontType)}>
                  <option>All Types</option>
                  <option>Villa</option>
                  <option>Apartment</option>
                  <option>Studio</option>
                  <option>Loft</option>
                </select>
              </div>
              <div>
                <label className={`block text-sm font-bold mb-2 ${theme.textMain}`} style={fontStack(theme.fontType)}>
                  Bedrooms
                </label>
                <select className={`w-full h-10 px-3 ${theme.corners} ${theme.inputStyle}`} style={fontStack(theme.fontType)}>
                  <option>Any</option>
                  <option>1+</option>
                  <option>2+</option>
                  <option>3+</option>
                  <option>4+</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6' : 'space-y-4'}>
        {[
          {
            img: '1600585154340-be6161a56a0c',
            title: 'Sunny Coast Villa',
            price: '$2.5M',
            type: 'SALE',
          },
          {
            img: '1600607687939-ce8a6c25118c',
            title: 'Downtown Duplex',
            price: '$4,200/mo',
            type: 'RENT',
          },
          {
            img: '1600566753195-f3831ac137c9',
            title: 'Forest Retreat',
            price: '$850k',
            type: 'SALE',
          },
          {
            img: '1600210492486-724fe5c67fb0',
            title: 'Minimal Studio',
            price: '$1,800/mo',
            type: 'RENT',
          },
          {
            img: '1600585154526-998d781f5a42',
            title: 'Victorian Manor',
            price: '$5.8M',
            type: 'SALE',
          },
          {
            img: '1600047509807-c25cd61e6818',
            title: 'Industrial Loft',
            price: '$3,500/mo',
            type: 'RENT',
          },
          {
            img: '1600566753086-00f18fb6b3ea',
            title: 'Lakeside Glass',
            price: '$1.2M',
            type: 'SALE',
          },
          {
            img: '1600585154340-be6161a56a0c',
            title: 'Art District Apt',
            price: '$950k',
            type: 'SALE',
          },
        ].map((item, idx) => (
          <div
            key={idx}
            onClick={() => navigate('property')}
            className={`group cursor-pointer ${theme.bgPanel} ${theme.corners} ${theme.shadow} ${theme.border} overflow-hidden ${
              viewMode === 'grid' ? 'flex flex-col' : 'flex flex-row'
            } transition-all hover:-translate-y-1 hover:shadow-xl`}
          >
            <div className={viewMode === 'grid' ? 'h-56 relative overflow-hidden' : 'w-64 h-48 relative overflow-hidden flex-shrink-0'}>
              <img
                src={`https://images.unsplash.com/photo-${item.img}?auto=format&fit=crop&w=600&q=80`}
                alt="Property"
                className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  theme.effects.raw ? 'contrast-125 grayscale' : ''
                }`}
                style={theme.effects.pixel ? { imageRendering: 'pixelated' } : {}}
              />
              <div className="absolute top-3 left-3">
                <span
                  className={`px-2 py-1 text-xs font-bold bg-white/90 text-black backdrop-blur-sm ${theme.corners} border border-black/10`}
                  style={fontStack(theme.fontType)}
                >
                  {item.type}
                </span>
              </div>
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <ThemeHeading theme={theme} level={3} className="text-lg mb-1 truncate">
                {item.title}
              </ThemeHeading>
              <ThemeText theme={theme} muted className="text-xs mb-4 flex items-center gap-1">
                <MapPin size={12} /> Beverly Hills, CA
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
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-12">
        <button
          className={`p-2 ${theme.bgPanel} ${theme.border} ${theme.corners} ${theme.textMuted} hover:${theme.textMain} transition-colors`}
        >
          <ChevronLeft size={20} />
        </button>
        {[1, 2, 3, 4, 5].map(page => (
          <button
            key={page}
            className={`w-10 h-10 flex items-center justify-center font-bold ${theme.corners} transition-all ${
              page === 1
                ? theme.primary
                : `${theme.bgPanel} ${theme.border} ${theme.textMain} hover:bg-gray-100`
            }`}
          >
            {page}
          </button>
        ))}
        <button
          className={`p-2 ${theme.bgPanel} ${theme.border} ${theme.corners} ${theme.textMuted} hover:bg-gray-100 transition-colors`}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </LayoutContainer>
  );
};

export default ViewListings;
