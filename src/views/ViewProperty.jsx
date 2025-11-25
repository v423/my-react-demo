import React from 'react';
import { ArrowLeft, MapPin, Calendar, Phone } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { fontStack } from '../constants/themes';
import LayoutContainer from '../components/LayoutContainer';
import ThemeHeading from '../components/ThemeHeading';
import ThemeText from '../components/ThemeText';
import ThemeButton from '../components/ThemeButton';

const ViewProperty = ({ navigate }) => {
  const { theme } = useTheme();

  return (
    <LayoutContainer className="animate-fadeIn">
      <button
        onClick={() => navigate('listings')}
        className={`flex items-center gap-2 text-sm font-bold mb-6 ${theme.textMuted} hover:${theme.textMain}`}
      >
        <ArrowLeft size={16} /> Back to Listings
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div
            className={`w-full h-[450px] ${theme.corners} ${theme.shadow} overflow-hidden relative ${theme.border}`}
          >
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
              className="w-full h-full object-cover"
              alt="Property"
            />
            <div className="absolute bottom-4 right-4">
              <span className={`px-3 py-1 bg-black/70 text-white text-sm ${theme.corners}`}>
                1/24
              </span>
            </div>
          </div>

          <div className={`p-8 ${theme.bgPanel} ${theme.corners} ${theme.shadow} ${theme.border}`}>
            <div className="flex justify-between items-start mb-6">
              <div>
                <ThemeHeading level={1} className="text-3xl mb-2">
                  Beverly Hills Manor
                </ThemeHeading>
                <ThemeText muted className="flex items-center gap-2">
                  <MapPin size={16} /> 1234 Luxury Lane, CA
                </ThemeText>
              </div>
              <div
                className={`text-3xl font-bold ${theme.textMain} hidden md:block`}
                style={fontStack(theme.fontType)}
              >
                $4,200<span className="text-base font-normal text-gray-400">/mo</span>
              </div>
            </div>

            <ThemeHeading level={3} className="text-xl mb-4">
              Description
            </ThemeHeading>
            <ThemeText muted className="leading-relaxed mb-8">
              Situated on the prestigious Bird Streets, this stunning modern masterpiece boasts
              unparalleled city views. The open floor plan blends indoor and outdoor living, with
              floor-to-ceiling glass walls flooding every corner with natural light.
            </ThemeText>

            <ThemeHeading level={3} className="text-xl mb-4">
              Amenities
            </ThemeHeading>
            <div className="flex flex-wrap gap-2">
              {['Pool', 'Gym', 'Cinema', 'Wine Cellar', 'Smart Home', 'Security'].map(tag => (
                <span
                  key={tag}
                  className={`px-3 py-1 text-sm ${theme.bgApp} ${theme.textMain} ${theme.corners} border ${theme.border}`}
                  style={fontStack(theme.fontType)}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative">
          <div
            className={`p-6 ${theme.bgPanel} ${theme.corners} ${theme.shadow} ${theme.border} sticky top-6`}
          >
            <div className={`text-3xl font-bold mb-6 md:hidden ${theme.textMain}`}>
              $4,200<span className="text-base font-normal text-gray-500">/mo</span>
            </div>

            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-dashed border-gray-200">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80"
                className={`w-14 h-14 rounded-full object-cover ${theme.border}`}
                alt="Agent"
              />
              <div>
                <div className={`font-bold ${theme.textMain}`} style={fontStack(theme.fontType)}>
                  Sarah Johnson
                </div>
                <div className={`text-xs ${theme.textMuted}`}>Senior Agent</div>
              </div>
            </div>

            <div className="space-y-3">
              <ThemeButton className="w-full" onClick={() => navigate('form')}>
                <Calendar size={18} /> Book Viewing
              </ThemeButton>
              <ThemeButton variant="secondary" className="w-full">
                <Phone size={18} /> Contact Agent
              </ThemeButton>
            </div>
          </div>
        </div>
      </div>
    </LayoutContainer>
  );
};

export default ViewProperty;
