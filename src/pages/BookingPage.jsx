import React from 'react';
import { ArrowLeft, User, Mail, Phone, Calendar, Users, MessageSquare } from 'lucide-react';
import { LayoutContainer } from '../components/layout/LayoutContainer';
import { ThemeHeading } from '../components/ui/ThemeHeading';
import { ThemeText } from '../components/ui/ThemeText';
import { ThemeButton } from '../components/ui/ThemeButton';
import { ThemeInput } from '../components/ui/ThemeInput';

export const BookingPage = ({ theme, navigate }) => {
  return (
    <LayoutContainer theme={theme} className="animate-fadeIn">
      <div className="max-w-2xl mx-auto">
        <button
          onClick={() => navigate('landing')}
          className={`flex items-center gap-2 text-sm font-bold mb-8 ${theme.textMuted} hover:${theme.textMain}`}
        >
          <ArrowLeft size={16} /> Back to Home
        </button>

        <div className={`p-8 md:p-12 ${theme.bgPanel} ${theme.corners} ${theme.shadow} ${theme.border}`}>
          <div className="text-center mb-10">
            <ThemeHeading theme={theme} level={2}>
              Start Your Journey
            </ThemeHeading>
            <ThemeText theme={theme} muted>
              Create your account to save favorites and schedule tours.
            </ThemeText>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className={`text-sm font-bold ${theme.textMain}`}>First Name</label>
                <ThemeInput theme={theme} icon={User} placeholder="John" />
              </div>
              <div className="space-y-2">
                <label className={`text-sm font-bold ${theme.textMain}`}>Last Name</label>
                <ThemeInput theme={theme} icon={User} placeholder="Doe" />
              </div>
            </div>

            <div className="space-y-2">
              <label className={`text-sm font-bold ${theme.textMain}`}>Email Address</label>
              <ThemeInput theme={theme} type="email" icon={Mail} placeholder="john@example.com" />
            </div>

            <div className="space-y-2">
              <label className={`text-sm font-bold ${theme.textMain}`}>Phone Number</label>
              <ThemeInput theme={theme} type="tel" icon={Phone} placeholder="+1 (555) 000-0000" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className={`text-sm font-bold ${theme.textMain}`}>Check-in Date</label>
                    <ThemeInput theme={theme} type="date" icon={Calendar} />
                </div>
                <div className="space-y-2">
                    <label className={`text-sm font-bold ${theme.textMain}`}>Number of Guests</label>
                    <ThemeInput theme={theme} type="number" icon={Users} placeholder="2" min="1" />
                </div>
            </div>

            <div className="space-y-2">
                <label className={`text-sm font-bold ${theme.textMain}`}>Special Requests</label>
                <div className="relative w-full">
                    <div className={`absolute left-3 top-3 ${theme.textMuted} z-10`}>
                        <MessageSquare size={18} />
                    </div>
                    <textarea
                        className={`w-full h-32 py-3 outline-none transition-all ${theme.corners} ${theme.inputStyle} pl-10 pr-4 resize-none`}
                        placeholder="Any specific requirements or questions?"
                    ></textarea>
                </div>
            </div>

            <div className="pt-4">
              <ThemeButton theme={theme} className="w-full">
                Create Account
              </ThemeButton>
            </div>

            <p className={`text-center text-xs ${theme.textMuted} mt-4`}>
              By creating an account, you agree to our Terms of Service and Privacy Policy.
            </p>
          </form>
        </div>
      </div>
    </LayoutContainer>
  );
};
