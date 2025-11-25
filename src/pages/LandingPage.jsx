import React from 'react';
import { MapPin, Search, ArrowRight, Quote, User } from 'lucide-react';
import { LayoutContainer } from '../components/layout/LayoutContainer';
import { ThemeHeading } from '../components/ui/ThemeHeading';
import { ThemeText } from '../components/ui/ThemeText';
import { ThemeButton } from '../components/ui/ThemeButton';
import { ThemeInput } from '../components/ui/ThemeInput';
import { fontStack } from '../utils/fontStack';

export const LandingPage = ({ theme, navigate }) => {
  return (
    <div className="animate-fadeIn">
      <div
        className={`relative overflow-hidden min-h-[600px] flex flex-col justify-center ${theme.corners} ${theme.shadow} ${theme.border} mb-12`}
      >
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
          alt="Hero"
          className={`absolute inset-0 w-full h-full object-cover z-0 ${
            theme.effects.pixel ? 'pixelate' : ''
          }`}
          style={theme.effects.pixel ? { imageRendering: 'pixelated' } : {}}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30 z-0`}
        ></div>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center md:text-left">
          <div
            className={`inline-block px-3 py-1 mb-4 text-xs font-bold uppercase tracking-widest text-white border border-white/30 backdrop-blur-sm ${theme.corners}`}
          >
            DreamHome Real Estate
          </div>
          <ThemeHeading
            theme={{
              ...theme,
              textMain: 'text-white',
              layout: theme.layout === 'centered' ? 'centered' : 'left',
            }}
            level={1}
          >
            Discover Your <br />
            <span
              className={
                theme.effects.bling
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500'
                  : ''
              }
            >
              Perfect Sanctuary
            </span>
          </ThemeHeading>

          <ThemeText
            theme={{
              ...theme,
              textMain: 'text-gray-200',
              layout: theme.layout === 'centered' ? 'centered' : 'left',
            }}
            className="text-xl mb-10 max-w-2xl font-medium drop-shadow-md"
          >
            Explore thousands of premium listings across 500+ cities. From modern apartments to
            seaside villas.
          </ThemeText>

          <div
            className={`mx-auto max-w-4xl p-4 md:p-6 ${theme.bgPanel} ${theme.corners} ${theme.shadow} ${theme.border}`}
          >
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex-grow w-full md:w-auto h-12">
                <ThemeInput theme={theme} icon={MapPin} placeholder="Where do you want to live?" />
              </div>
              <div className="w-full md:w-48 h-12">
                <select
                  className={`w-full h-full px-4 outline-none ${theme.corners} ${theme.inputStyle} appearance-none cursor-pointer`}
                  style={fontStack(theme.fontType)}
                >
                  <option>All Types</option>
                  <option>Villas</option>
                  <option>Apartments</option>
                </select>
              </div>
              <div className="w-full md:w-48 h-12">
                <ThemeButton
                  theme={theme}
                  className="w-full h-full"
                  onClick={() => navigate('listings')}
                >
                  <Search size={20} /> Search
                </ThemeButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      <LayoutContainer theme={theme}>
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 text-center ${theme.border} ${
            theme.corners
          } p-8 ${theme.bgApp !== 'bg-white' ? 'bg-black/5' : 'bg-gray-50'}`}
        >
          {[
            { num: '12k+', label: 'Premium Listings' },
            { num: '98%', label: 'Satisfaction' },
            { num: '24/7', label: 'Support' },
            { num: '150+', label: 'Cities Covered' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <div
                className={`text-3xl md:text-4xl font-black ${theme.textMain} mb-2`}
                style={fontStack(theme.fontType)}
              >
                {stat.num}
              </div>
              <div
                className={`text-sm uppercase tracking-wider ${theme.textMuted}`}
                style={fontStack(theme.fontType)}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-20">
          <div className="flex justify-between items-end mb-8">
            <ThemeHeading theme={theme} level={2}>
              Featured Homes
            </ThemeHeading>
            <button
              onClick={() => navigate('listings')}
              className={`flex items-center gap-2 font-bold ${theme.textMain} hover:opacity-70 mb-4`}
              style={fontStack(theme.fontType)}
            >
              View All <ArrowRight size={18} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                title: 'Seaside Villa',
                price: '$4.5M',
                location: 'Malibu, CA',
                img: '1600596542815-2a4d9f6facb8',
              },
              {
                id: 2,
                title: 'Skyline Penthouse',
                price: '$2.8M',
                location: 'New York, NY',
                img: '1600607687939-ce8a6c25118c',
              },
              {
                id: 3,
                title: 'Modern Studio',
                price: '$850k',
                location: 'Berlin, DE',
                img: '1600210492486-724fe5c67fb0',
              },
            ].map(item => (
              <div
                key={item.id}
                className={`group cursor-pointer ${theme.bgPanel} ${theme.corners} ${theme.shadow} ${theme.border} overflow-hidden`}
                onClick={() => navigate('property')}
              >
                <div className="h-64 relative overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-${item.img}?auto=format&fit=crop&w=800&q=80`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className={`absolute bottom-0 left-0 p-4 w-full bg-gradient-to-t from-black/80 to-transparent text-white`}
                  >
                    <div className="font-bold text-lg" style={fontStack(theme.fontType)}>
                      {item.price}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <ThemeHeading theme={theme} level={3} className="text-xl mb-2">
                    {item.title}
                  </ThemeHeading>
                  <ThemeText theme={theme} muted className="flex items-center gap-2 text-sm">
                    <MapPin size={14} /> {item.location}
                  </ThemeText>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center`}>
          <div
            className={`p-8 md:p-12 ${theme.bgPanel} ${theme.corners} ${theme.shadow} ${theme.border}`}
          >
            <Quote size={40} className={`${theme.textMuted} mb-6 opacity-50`} />
            <ThemeText theme={theme} className="text-lg md:text-xl leading-relaxed mb-6 italic">
              "DreamHome helped us find our dream beach house in record time. The interface is so
              intuitive and the filtering is precise."
            </ThemeText>
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full bg-gray-300 ${theme.border}`}></div>
              <div>
                <div className={`font-bold ${theme.textMain}`} style={fontStack(theme.fontType)}>
                  Emily & James
                </div>
                <div className={`text-sm ${theme.textMuted}`} style={fontStack(theme.fontType)}>
                  Homeowners, SF
                </div>
              </div>
            </div>
          </div>

          <div className={`text-${theme.layout === 'centered' ? 'center' : 'left'}`}>
            <ThemeHeading theme={theme} level={2}>
              Ready to move in?
            </ThemeHeading>
            <ThemeText theme={theme} muted className="text-lg mb-8">
              Join thousands of happy homeowners. Sign up today to get alerts on new listings
              matching your criteria.
            </ThemeText>
            <div className="flex flex-col sm:flex-row gap-4">
              <ThemeButton theme={theme} onClick={() => navigate('form')}>
                <User size={18} /> Create Account
              </ThemeButton>
              <ThemeButton theme={theme} variant="secondary" onClick={() => navigate('listings')}>
                Browse First
              </ThemeButton>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </div>
  );
};
