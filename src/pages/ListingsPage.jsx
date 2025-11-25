import React, { useState } from 'react';
import { ArrowLeft, Layout, Grid, Filter, ChevronDown, ChevronLeft, ChevronRight, MapPin, Heart } from 'lucide-react';
import { LayoutContainer } from '../components/layout/LayoutContainer';
import { ThemeHeading } from '../components/ui/ThemeHeading';
import { ThemeText } from '../components/ui/ThemeText';
import { fontStack } from '../utils/fontStack';

export const ListingsPage = ({ theme, navigate }) => {
  const [layoutMode, setLayoutMode] = useState('grid'); // 'grid' or 'list'
  const [filterOpen, setFilterOpen] = useState(false);

  const listings = [
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
  ];

  return (
    <LayoutContainer theme={theme} className="animate-fadeIn">
      <div className="mb-8">
        <button
          onClick={() => navigate('landing')}
          className={`flex items-center gap-2 text-sm font-bold mb-4 ${theme.textMuted} hover:${theme.textMain}`}
        >
          <ArrowLeft size={16} /> Back to Home
        </button>
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
              onClick={() => setLayoutMode('list')}
              className={`p-3 ${theme.bgPanel} ${theme.border} ${theme.corners} ${theme.textMain} ${layoutMode === 'list' ? 'opacity-100 ring-2 ring-current' : 'opacity-70'}`}
            >
              <Layout size={20} />
            </button>
            <button
              onClick={() => setLayoutMode('grid')}
              className={`p-3 ${theme.bgPanel} ${theme.border} ${theme.corners} ${theme.textMain} ${layoutMode === 'grid' ? 'opacity-100 ring-2 ring-current' : 'opacity-70'}`}
            >
              <Grid size={20} />
            </button>
            <div
              className={`relative flex items-center gap-2 px-4 py-2 ${theme.bgPanel} ${theme.border} ${theme.corners} ${theme.textMain} cursor-pointer`}
              style={fontStack(theme.fontType)}
              onClick={() => setFilterOpen(!filterOpen)}
            >
              <Filter size={18} />
              <span className="text-sm font-bold">Filter</span>
              <ChevronDown size={14} className="ml-2" />
              
              {filterOpen && (
                <div className={`absolute top-full right-0 mt-2 w-48 ${theme.bgPanel} ${theme.border} ${theme.corners} shadow-xl z-20 p-2`}>
                   <div className="p-2 hover:bg-gray-100 cursor-pointer">Price: Low to High</div>
                   <div className="p-2 hover:bg-gray-100 cursor-pointer">Price: High to Low</div>
                   <div className="p-2 hover:bg-gray-100 cursor-pointer">Newest First</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={`grid ${layoutMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1'} gap-6`}>
        {listings.map((item, idx) => (
          <div
            key={idx}
            onClick={() => navigate('property')}
            className={`group cursor-pointer ${theme.bgPanel} ${theme.corners} ${theme.shadow} ${theme.border} overflow-hidden flex ${layoutMode === 'grid' ? 'flex-col' : 'flex-row h-48'} transition-all hover:-translate-y-1 hover:shadow-xl`}
          >
            <div className={`${layoutMode === 'grid' ? 'h-56 w-full' : 'w-1/3 h-full'} relative overflow-hidden`}>
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
            <div className={`p-5 flex flex-col flex-grow ${layoutMode === 'grid' ? '' : 'justify-center'}`}>
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
                <Heart size={20} className={`${theme.textMuted} hover:text-red-500`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-12">
        <button
          className={`p-2 ${theme.bgPanel} ${theme.border} ${theme.corners} ${theme.textMuted} hover:${theme.textMain}`}
        >
          <ChevronLeft size={20} />
        </button>
        {[1, 2, 3, 4, 5].map(page => (
          <button
            key={page}
            className={`w-10 h-10 flex items-center justify-center font-bold ${theme.corners} ${
              page === 1
                ? theme.primary
                : `${theme.bgPanel} ${theme.border} ${theme.textMain} hover:bg-gray-100`
            }`}
          >
            {page}
          </button>
        ))}
        <button
          className={`p-2 ${theme.bgPanel} ${theme.border} ${theme.corners} ${theme.textMuted} hover:bg-gray-100`}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </LayoutContainer>
  );
};
