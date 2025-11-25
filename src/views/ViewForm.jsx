import React, { useState } from 'react';
import { ArrowLeft, User, Sliders, Upload, Mail, Phone as PhoneIcon, MapPin, Calendar, Home, DollarSign, Check } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { fontStack } from '../constants/themes';
import LayoutContainer from '../components/LayoutContainer';
import ThemeHeading from '../components/ThemeHeading';
import ThemeText from '../components/ThemeText';
import ThemeButton from '../components/ThemeButton';
import ThemeInput from '../components/ThemeInput';

const ViewForm = ({ navigate }) => {
  const { theme } = useTheme();
  
  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    guests: 1,
    preferredDate: '',
    preferredTime: '10:00',
    propertyType: 'any',
    budgetMin: 500000,
    budgetMax: 2000000,
    bedrooms: 2,
    bathrooms: 1,
    transactionType: 'buy',
    isUrgent: false,
    preferredContact: 'email',
    amenities: [],
    additionalNotes: '',
    newsletter: true,
    termsAccepted: false,
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAmenityToggle = (amenity) => {
    setFormData(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Request Submitted Successfully!');
    navigate('landing');
  };

  const amenityOptions = ['Pool', 'Gym', 'Parking', 'Garden', 'Security', 'Smart Home', 'Pet Friendly', 'Balcony'];
  const timeSlots = ['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00'];

  return (
    <LayoutContainer className="animate-fadeIn max-w-3xl">
      <button
        onClick={() => navigate('property')}
        className={`flex items-center gap-2 text-sm font-bold mb-6 ${theme.textMuted} hover:${theme.textMain}`}
      >
        <ArrowLeft size={16} /> Back to Details
      </button>

      <div
        className={`p-8 md:p-12 ${theme.bgPanel} ${theme.corners} ${theme.shadow} ${theme.border}`}
      >
        <div className="text-center mb-10">
          <ThemeHeading level={2} className="mb-2">
            Book a Viewing
          </ThemeHeading>
          <ThemeText muted>
            Fill in the form below to request a property tour.
          </ThemeText>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information Section */}
          <div
            className={`p-6 ${theme.bgApp} ${theme.corners} space-y-4 border ${theme.border} bg-opacity-50`}
          >
            <ThemeHeading level={3} className="text-lg flex items-center gap-2">
              <User size={18} /> Personal Information
            </ThemeHeading>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="w-full">
                <label className={`block text-sm font-bold mb-2 ${theme.textMuted}`} style={fontStack(theme.fontType)}>
                  Full Name *
                </label>
                <ThemeInput 
                  placeholder="John Doe" 
                  value={formData.fullName}
                  onChange={(e) => handleChange('fullName', e.target.value)}
                  required 
                />
              </div>
              <div className="w-full">
                <label className={`block text-sm font-bold mb-2 ${theme.textMuted}`} style={fontStack(theme.fontType)}>
                  Email Address *
                </label>
                <ThemeInput 
                  type="email" 
                  icon={Mail}
                  placeholder="john@example.com" 
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  required 
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="w-full">
                <label className={`block text-sm font-bold mb-2 ${theme.textMuted}`} style={fontStack(theme.fontType)}>
                  Phone Number
                </label>
                <ThemeInput 
                  type="tel" 
                  icon={PhoneIcon}
                  placeholder="+1 555 0000" 
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                />
              </div>
              <div className="w-full">
                <label className={`block text-sm font-bold mb-2 ${theme.textMuted}`} style={fontStack(theme.fontType)}>
                  Number of Guests
                </label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={formData.guests}
                  onChange={(e) => handleChange('guests', parseInt(e.target.value))}
                  className={`w-full h-12 px-4 outline-none ${theme.corners} ${theme.inputStyle}`}
                  style={fontStack(theme.fontType)}
                />
              </div>
            </div>

            {/* Preferred Contact Method */}
            <div>
              <label className={`block text-sm font-bold mb-3 ${theme.textMuted}`} style={fontStack(theme.fontType)}>
                Preferred Contact Method
              </label>
              <div className="flex flex-wrap gap-4">
                {[
                  { value: 'email', label: 'Email', icon: Mail },
                  { value: 'phone', label: 'Phone', icon: PhoneIcon },
                ].map((option) => {
                  const Icon = option.icon;
                  return (
                    <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="preferredContact"
                        value={option.value}
                        checked={formData.preferredContact === option.value}
                        onChange={(e) => handleChange('preferredContact', e.target.value)}
                        className="w-4 h-4"
                      />
                      <Icon size={16} className={theme.textMuted} />
                      <span style={fontStack(theme.fontType)} className={theme.textMain}>
                        {option.label}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Scheduling Section */}
          <div
            className={`p-6 ${theme.bgApp} ${theme.corners} space-y-4 border ${theme.border} bg-opacity-50`}
          >
            <ThemeHeading level={3} className="text-lg flex items-center gap-2">
              <Calendar size={18} /> Scheduling
            </ThemeHeading>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="w-full">
                <label className={`block text-sm font-bold mb-2 ${theme.textMuted}`} style={fontStack(theme.fontType)}>
                  Preferred Date *
                </label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => handleChange('preferredDate', e.target.value)}
                  className={`w-full h-12 px-4 outline-none ${theme.corners} ${theme.inputStyle}`}
                  style={fontStack(theme.fontType)}
                  required
                />
              </div>
              <div className="w-full">
                <label className={`block text-sm font-bold mb-2 ${theme.textMuted}`} style={fontStack(theme.fontType)}>
                  Preferred Time
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => handleChange('preferredTime', e.target.value)}
                  className={`w-full h-12 px-4 outline-none ${theme.corners} ${theme.inputStyle} appearance-none cursor-pointer`}
                  style={fontStack(theme.fontType)}
                >
                  {timeSlots.map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Property Preferences Section */}
          <div
            className={`p-6 ${theme.bgApp} ${theme.corners} space-y-4 border ${theme.border} bg-opacity-50`}
          >
            <ThemeHeading level={3} className="text-lg flex items-center gap-2">
              <Sliders size={18} /> Property Preferences
            </ThemeHeading>

            {/* Transaction Type */}
            <div>
              <label className={`block text-sm font-bold mb-3 ${theme.textMuted}`} style={fontStack(theme.fontType)}>
                Transaction Type
              </label>
              <div className="flex flex-wrap gap-4">
                {['buy', 'rent', 'either'].map((type) => (
                  <label key={type} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="transactionType"
                      value={type}
                      checked={formData.transactionType === type}
                      onChange={(e) => handleChange('transactionType', e.target.value)}
                      className="w-4 h-4"
                    />
                    <span style={fontStack(theme.fontType)} className={theme.textMain}>
                      {type === 'buy' ? 'Buy' : type === 'rent' ? 'Rent' : 'Either'}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Property Type */}
            <div>
              <label className={`block text-sm font-bold mb-2 ${theme.textMuted}`} style={fontStack(theme.fontType)}>
                Property Type
              </label>
              <select
                value={formData.propertyType}
                onChange={(e) => handleChange('propertyType', e.target.value)}
                className={`w-full h-12 px-4 outline-none ${theme.corners} ${theme.inputStyle} appearance-none cursor-pointer`}
                style={fontStack(theme.fontType)}
              >
                <option value="any">Any Type</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="condo">Condo</option>
                <option value="villa">Villa</option>
                <option value="townhouse">Townhouse</option>
                <option value="studio">Studio</option>
              </select>
            </div>

            {/* Budget Range Slider */}
            <div>
              <label className={`block text-sm font-bold mb-2 ${theme.textMuted}`} style={fontStack(theme.fontType)}>
                Budget Range: ${formData.budgetMin.toLocaleString()} - ${formData.budgetMax.toLocaleString()}
              </label>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <span className={`text-xs ${theme.textMuted}`}>Min</span>
                  <input
                    type="range"
                    min="100000"
                    max="5000000"
                    step="50000"
                    value={formData.budgetMin}
                    onChange={(e) => handleChange('budgetMin', parseInt(e.target.value))}
                    className="flex-1 h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <span className={`text-xs ${theme.textMuted}`}>Max</span>
                  <input
                    type="range"
                    min="100000"
                    max="10000000"
                    step="50000"
                    value={formData.budgetMax}
                    onChange={(e) => handleChange('budgetMax', parseInt(e.target.value))}
                    className="flex-1 h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Bedrooms and Bathrooms */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={`block text-sm font-bold mb-2 ${theme.textMuted}`} style={fontStack(theme.fontType)}>
                  Bedrooms: {formData.bedrooms}+
                </label>
                <input
                  type="range"
                  min="1"
                  max="6"
                  value={formData.bedrooms}
                  onChange={(e) => handleChange('bedrooms', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <div>
                <label className={`block text-sm font-bold mb-2 ${theme.textMuted}`} style={fontStack(theme.fontType)}>
                  Bathrooms: {formData.bathrooms}+
                </label>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={formData.bathrooms}
                  onChange={(e) => handleChange('bathrooms', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>

            {/* Amenities Checkboxes */}
            <div>
              <label className={`block text-sm font-bold mb-3 ${theme.textMuted}`} style={fontStack(theme.fontType)}>
                Desired Amenities
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {amenityOptions.map((amenity) => (
                  <label 
                    key={amenity} 
                    className={`flex items-center gap-2 cursor-pointer p-2 ${theme.corners} border ${theme.border} transition-all ${
                      formData.amenities.includes(amenity) ? 'bg-blue-50 border-blue-300' : 'hover:bg-gray-50'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={formData.amenities.includes(amenity)}
                      onChange={() => handleAmenityToggle(amenity)}
                      className="w-4 h-4"
                    />
                    <span style={fontStack(theme.fontType)} className={`text-sm ${theme.textMain}`}>
                      {amenity}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Options Section */}
          <div
            className={`p-6 ${theme.bgApp} ${theme.corners} space-y-4 border ${theme.border} bg-opacity-50`}
          >
            <ThemeHeading level={3} className="text-lg flex items-center gap-2">
              <Home size={18} /> Additional Options
            </ThemeHeading>

            {/* File Upload */}
            <div>
              <label className={`block text-sm font-bold mb-2 ${theme.textMuted}`} style={fontStack(theme.fontType)}>
                Upload Documents (optional)
              </label>
              <div
                className={`relative w-full h-24 border-2 border-dashed border-gray-400 ${theme.corners} flex flex-col items-center justify-center bg-white hover:bg-gray-50 transition-colors`}
              >
                <Upload size={24} className={theme.textMuted} />
                <span className={`text-sm mt-2 ${theme.textMuted}`}>Drop files here or click to upload</span>
                <input type="file" multiple className="opacity-0 absolute inset-0 cursor-pointer" />
              </div>
            </div>

            {/* Additional Notes Textarea */}
            <div>
              <label className={`block text-sm font-bold mb-2 ${theme.textMuted}`} style={fontStack(theme.fontType)}>
                Additional Notes
              </label>
              <textarea
                value={formData.additionalNotes}
                onChange={(e) => handleChange('additionalNotes', e.target.value)}
                placeholder="Any specific requirements or questions..."
                rows={4}
                className={`w-full p-4 outline-none resize-none ${theme.corners} ${theme.inputStyle}`}
                style={fontStack(theme.fontType)}
              />
            </div>

            {/* Checkboxes for urgent and newsletter */}
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.isUrgent}
                  onChange={(e) => handleChange('isUrgent', e.target.checked)}
                  className="w-5 h-5"
                />
                <span style={fontStack(theme.fontType)} className={theme.textMain}>
                  This is an urgent request
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.newsletter}
                  onChange={(e) => handleChange('newsletter', e.target.checked)}
                  className="w-5 h-5"
                />
                <span style={fontStack(theme.fontType)} className={theme.textMain}>
                  Subscribe to newsletter for new listings
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.termsAccepted}
                  onChange={(e) => handleChange('termsAccepted', e.target.checked)}
                  className="w-5 h-5"
                  required
                />
                <span style={fontStack(theme.fontType)} className={theme.textMain}>
                  I accept the terms and conditions *
                </span>
              </label>
            </div>

            {/* Color preference (fun extra) */}
            <div>
              <label className={`block text-sm font-bold mb-2 ${theme.textMuted}`} style={fontStack(theme.fontType)}>
                Preferred Interior Color Theme
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="color"
                  defaultValue="#3b82f6"
                  className="w-12 h-12 cursor-pointer bg-transparent border-0 rounded"
                />
                <span className={`text-sm ${theme.textMuted}`}>Select your preferred color palette</span>
              </div>
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-4 pt-4">
            <ThemeButton type="submit" className="flex-1">
              <Check size={18} /> Submit Request
            </ThemeButton>
            <ThemeButton
              variant="secondary"
              type="button"
              onClick={() => navigate('property')}
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
