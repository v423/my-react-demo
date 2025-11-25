import React from 'react';
import { ArrowLeft, MapPin, Star, Share2, Heart, CheckCircle, Calendar, Shield, User } from 'lucide-react';
import { LayoutContainer } from '../components/layout/LayoutContainer';
import { ThemeHeading } from '../components/ui/ThemeHeading';
import { ThemeText } from '../components/ui/ThemeText';
import { ThemeButton } from '../components/ui/ThemeButton';
import { fontStack } from '../utils/fontStack';

export const PropertyPage = ({ theme, navigate }) => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Image */}
      <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600596542815-2a4d9f6facb8?auto=format&fit=crop&w=1600&q=80"
          alt="Property Hero"
          className={`w-full h-full object-cover ${theme.effects.pixel ? 'pixelate' : ''}`}
          style={theme.effects.pixel ? { imageRendering: 'pixelated' } : {}}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute top-6 left-6 md:left-12">
          <button
            onClick={() => navigate('listings')}
            className={`flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md text-white rounded-full hover:bg-white/30 transition-colors`}
          >
            <ArrowLeft size={18} /> Back to Listings
          </button>
        </div>
      </div>

      <LayoutContainer theme={theme} className="-mt-20 relative z-10">
        <div className={`p-6 md:p-10 ${theme.bgPanel} ${theme.corners} ${theme.shadow} ${theme.border}`}>
          <div className="flex flex-col md:flex-row justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span
                  className={`px-3 py-1 text-xs font-bold uppercase tracking-wider ${theme.primary} text-white ${theme.corners}`}
                >
                  For Sale
                </span>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star size={16} fill="currentColor" />
                  <span className="font-bold">4.9</span>
                  <span className="text-gray-400 text-sm">(128 reviews)</span>
                </div>
              </div>
              <ThemeHeading theme={theme} level={1} className="mb-2">
                Seaside Villa
              </ThemeHeading>
              <ThemeText theme={theme} muted className="flex items-center gap-2 text-lg">
                <MapPin size={18} /> 123 Ocean Drive, Malibu, CA 90265
              </ThemeText>
            </div>
            <div className="flex flex-col items-end gap-4">
              <div className={`text-3xl md:text-4xl font-black ${theme.textMain}`} style={fontStack(theme.fontType)}>
                $4,500,000
              </div>
              <div className="flex gap-2">
                <button className={`p-3 rounded-full border ${theme.border} hover:bg-gray-50`}>
                  <Share2 size={20} className={theme.textMuted} />
                </button>
                <button className={`p-3 rounded-full border ${theme.border} hover:bg-gray-50`}>
                  <Heart size={20} className={theme.textMuted} />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              {/* Description */}
              <section>
                <ThemeHeading theme={theme} level={3} className="mb-4">
                  About this home
                </ThemeHeading>
                <ThemeText theme={theme} className="leading-relaxed text-lg">
                  Experience the pinnacle of coastal living in this stunning modern masterpiece.
                  Featuring panoramic ocean views, this architectural gem offers seamless indoor-outdoor
                  living with floor-to-ceiling glass walls. The open-concept living area is perfect for
                  entertaining, while the private master suite provides a serene retreat.
                </ThemeText>
              </section>

              {/* Features */}
              <section>
                <ThemeHeading theme={theme} level={3} className="mb-6">
                  Key Features
                </ThemeHeading>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    'Ocean View',
                    'Private Pool',
                    'Smart Home',
                    'Wine Cellar',
                    'Home Theater',
                    'Guest House',
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle size={18} className="text-green-500" />
                      <ThemeText theme={theme}>{feature}</ThemeText>
                    </div>
                  ))}
                </div>
              </section>

              {/* Gallery */}
              <section>
                <ThemeHeading theme={theme} level={3} className="mb-6">
                  Gallery
                </ThemeHeading>
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
                    className={`w-full h-48 object-cover ${theme.corners}`}
                  />
                  <img
                    src="https://images.unsplash.com/photo-1600566753195-f3831ac137c9?auto=format&fit=crop&w=800&q=80"
                    className={`w-full h-48 object-cover ${theme.corners}`}
                  />
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className={`sticky top-24 p-6 ${theme.bgApp !== 'bg-white' ? 'bg-white/50' : 'bg-gray-50'} ${theme.corners} ${theme.border}`}>
                <ThemeHeading theme={theme} level={3} className="mb-6">
                  Schedule a Tour
                </ThemeHeading>
                <div className="space-y-4 mb-6">
                  <div className={`flex items-center gap-4 p-4 bg-white ${theme.corners} border border-gray-200 cursor-pointer hover:border-blue-500`}>
                    <Calendar size={24} className="text-blue-500" />
                    <div>
                      <div className="font-bold text-sm">In-Person Tour</div>
                      <div className="text-xs text-gray-500">Visit the property</div>
                    </div>
                  </div>
                  <div className={`flex items-center gap-4 p-4 bg-white ${theme.corners} border border-gray-200 cursor-pointer hover:border-blue-500`}>
                    <Shield size={24} className="text-blue-500" />
                    <div>
                      <div className="font-bold text-sm">Video Chat</div>
                      <div className="text-xs text-gray-500">Live walk-through</div>
                    </div>
                  </div>
                </div>
                <ThemeButton theme={theme} className="w-full mb-4" onClick={() => navigate('form')}>
                  Request Tour
                </ThemeButton>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <User size={14} />
                  Listing Agent: <span className="font-bold text-gray-700">Sarah Jenkins</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </div>
  );
};
