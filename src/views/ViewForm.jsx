import React, { useState } from 'react';
import { ArrowLeft, User, Sliders, Upload, Calendar, Mail, Phone, MapPin, DollarSign, Home } from 'lucide-react';
import LayoutContainer from '../components/LayoutContainer';
import ThemeHeading from '../components/ThemeHeading';
import ThemeText from '../components/ThemeText';
import ThemeButton from '../components/ThemeButton';
import ThemeInput from '../components/ThemeInput';
import { fontStack } from '../constants/themes';

const ViewForm = ({ theme, navigate }) => {
  const [formData, setFormData] = useState({
    propertyType: 'buy',
    urgent: false,
  });

  return (
    <LayoutContainer theme={theme} className="animate-fadeIn max-w-3xl">
      <div
        className={`p-8 md:p-12 ${theme.bgPanel} ${theme.corners} ${theme.shadow} ${theme.border}`}
      >
        <div className="text-center mb-10">
          <ThemeHeading theme={{ ...theme, layout: 'centered' }} level={2}>
            Book a Property Viewing
          </ThemeHeading>
          <ThemeText theme={{ ...theme, layout: 'centered' }} muted>
            Fill in the form below to schedule your visit
          </ThemeText>
        </div>

        <form
          onSubmit={e => {
            e.preventDefault();
            alert('Request Submitted!');
            navigate('landing');
          }}
          className="space-y-6"
        >
          {/* Personal Info Section */}
          <div
            className={`p-6 ${theme.bgApp} ${theme.corners} space-y-4 border ${theme.border} bg-opacity-50`}
          >
            <ThemeHeading theme={theme} level={3} className="text-lg flex items-center gap-2">
              <User size={18} /> Personal Information
            </ThemeHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="w-full">
                <label
                  className={`block text-sm font-bold mb-2 ${theme.textMain}`}
                  style={fontStack(theme.fontType)}
                >
                  Full Name *
                </label>
                <ThemeInput theme={theme} placeholder="John Doe" required />
              </div>
              <div className="w-full">
                <label
                  className={`block text-sm font-bold mb-2 ${theme.textMain}`}
                  style={fontStack(theme.fontType)}
                >
                  Email Address *
                </label>
                <ThemeInput
                  theme={theme}
                  type="email"
                  icon={Mail}
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="w-full">
                <label
                  className={`block text-sm font-bold mb-2 ${theme.textMain}`}
                  style={fontStack(theme.fontType)}
                >
                  Phone Number
                </label>
                <ThemeInput theme={theme} type="tel" icon={Phone} placeholder="+1 (555) 000-0000" />
              </div>
              <div className="w-full">
                <label
                  className={`block text-sm font-bold mb-2 ${theme.textMain}`}
                  style={fontStack(theme.fontType)}
                >
                  Number of Guests
                </label>
                <ThemeInput theme={theme} type="number" placeholder="2" min="1" max="10" />
              </div>
            </div>
          </div>

          {/* Preferences Section */}
          <div
            className={`p-6 ${theme.bgApp} ${theme.corners} space-y-4 border ${theme.border} bg-opacity-50`}
          >
            <ThemeHeading theme={theme} level={3} className="text-lg flex items-center gap-2">
              <Sliders size={18} /> Viewing Preferences
            </ThemeHeading>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="w-full">
                <label
                  className={`block text-sm font-bold mb-2 ${theme.textMain}`}
                  style={fontStack(theme.fontType)}
                >
                  Preferred Date
                </label>
                <input
                  type="date"
                  className={`w-full h-12 px-4 outline-none ${theme.corners} ${theme.inputStyle}`}
                  style={fontStack(theme.fontType)}
                />
              </div>
              <div className="w-full">
                <label
                  className={`block text-sm font-bold mb-2 ${theme.textMain}`}
                  style={fontStack(theme.fontType)}
                >
                  Preferred Time
                </label>
                <input
                  type="time"
                  className={`w-full h-12 px-4 outline-none ${theme.corners} ${theme.inputStyle}`}
                  style={fontStack(theme.fontType)}
                />
              </div>
            </div>

            <div>
              <label
                className={`block text-sm font-bold mb-2 ${theme.textMain}`}
                style={fontStack(theme.fontType)}
              >
                Budget Range
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="0"
                  max="10000000"
                  step="100000"
                  className="flex-1 h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                />
                <span className={`text-sm ${theme.textMuted}`} style={fontStack(theme.fontType)}>
                  $0 - $10M
                </span>
              </div>
            </div>

            <div>
              <label
                className={`block text-sm font-bold mb-2 ${theme.textMain}`}
                style={fontStack(theme.fontType)}
              >
                Property Location Preference
              </label>
              <ThemeInput theme={theme} icon={MapPin} placeholder="Enter city or neighborhood" />
            </div>
          </div>

          {/* Additional Details Section */}
          <div
            className={`p-6 ${theme.bgApp} ${theme.corners} space-y-4 border ${theme.border} bg-opacity-50`}
          >
            <ThemeHeading theme={theme} level={3} className="text-lg flex items-center gap-2">
              <Home size={18} /> Additional Details
            </ThemeHeading>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="w-full">
                <label
                  className={`block text-sm font-bold mb-2 ${theme.textMain}`}
                  style={fontStack(theme.fontType)}
                >
                  Property Type
                </label>
                <select
                  className={`w-full h-12 px-4 outline-none ${theme.corners} ${theme.inputStyle} appearance-none cursor-pointer`}
                  style={fontStack(theme.fontType)}
                >
                  <option>Any</option>
                  <option>House</option>
                  <option>Apartment</option>
                  <option>Condo</option>
                  <option>Villa</option>
                  <option>Studio</option>
                </select>
              </div>
              <div className="w-full">
                <label
                  className={`block text-sm font-bold mb-2 ${theme.textMain}`}
                  style={fontStack(theme.fontType)}
                >
                  Bedrooms
                </label>
                <select
                  className={`w-full h-12 px-4 outline-none ${theme.corners} ${theme.inputStyle} appearance-none cursor-pointer`}
                  style={fontStack(theme.fontType)}
                >
                  <option>Any</option>
                  <option>1+</option>
                  <option>2+</option>
                  <option>3+</option>
                  <option>4+</option>
                  <option>5+</option>
                </select>
              </div>
              <div className="w-full">
                <label
                  className={`block text-sm font-bold mb-2 ${theme.textMain}`}
                  style={fontStack(theme.fontType)}
                >
                  Bathrooms
                </label>
                <select
                  className={`w-full h-12 px-4 outline-none ${theme.corners} ${theme.inputStyle} appearance-none cursor-pointer`}
                  style={fontStack(theme.fontType)}
                >
                  <option>Any</option>
                  <option>1+</option>
                  <option>2+</option>
                  <option>3+</option>
                  <option>4+</option>
                </select>
              </div>
            </div>

            <div>
              <label
                className={`block text-sm font-bold mb-2 ${theme.textMain}`}
                style={fontStack(theme.fontType)}
              >
                Upload Documents (Optional)
              </label>
              <div
                className={`relative w-full h-24 border-2 border-dashed border-gray-400 ${theme.corners} flex flex-col items-center justify-center bg-white hover:bg-gray-50 transition-colors cursor-pointer`}
              >
                <Upload size={24} className={theme.textMuted} />
                <span className={`text-sm ${theme.textMuted} mt-2`} style={fontStack(theme.fontType)}>
                  Click to upload or drag and drop
                </span>
                <input type="file" multiple className="opacity-0 absolute inset-0 cursor-pointer" />
              </div>
            </div>

            <div>
              <label
                className={`block text-sm font-bold mb-2 ${theme.textMain}`}
                style={fontStack(theme.fontType)}
              >
                Special Requests or Notes
              </label>
              <textarea
                className={`w-full h-24 p-4 outline-none ${theme.corners} ${theme.inputStyle} resize-none`}
                style={fontStack(theme.fontType)}
                placeholder="Any specific requirements or questions..."
              />
            </div>

            <div className="flex flex-wrap gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="type"
                  value="buy"
                  checked={formData.propertyType === 'buy'}
                  onChange={e => setFormData({ ...formData, propertyType: e.target.value })}
                  className="w-4 h-4"
                />
                <span style={fontStack(theme.fontType)} className={theme.textMain}>
                  Looking to Buy
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="type"
                  value="rent"
                  checked={formData.propertyType === 'rent'}
                  onChange={e => setFormData({ ...formData, propertyType: e.target.value })}
                  className="w-4 h-4"
                />
                <span style={fontStack(theme.fontType)} className={theme.textMain}>
                  Looking to Rent
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.urgent}
                  onChange={e => setFormData({ ...formData, urgent: e.target.checked })}
                  className="w-4 h-4"
                />
                <span style={fontStack(theme.fontType)} className={theme.textMain}>
                  Urgent Request
                </span>
              </label>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <ThemeButton theme={theme} type="submit" className="flex-1">
              <Calendar size={18} /> Submit Request
            </ThemeButton>
            <ThemeButton
              theme={theme}
              variant="secondary"
              type="button"
              onClick={() => navigate('landing')}
            >
              Cancel
            </ThemeButton>
          </div>
        </form>
      </div>
    </LayoutContainer>
  );
};

export default ViewForm;
