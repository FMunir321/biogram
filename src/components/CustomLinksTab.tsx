import { useState, useRef } from 'react';
import characterImg from "../../public/assets/aleximage.png";
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

interface CustomLinksTabProps {
  isOpen: boolean;
  onClose: () => void;
}

const CustomLinksTab = ({ isOpen, onClose }: CustomLinksTabProps) => {
  const [profileImage, setProfileImage] = useState(characterImg);
  const [bio, setBio] = useState('');
  const [isBioEnabled, setIsBioEnabled] = useState(false);
  const [showFeaturedLinks, setShowFeaturedLinks] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isMerchEnabled, setIsMerchEnabled] = useState(false);
  const [merchImage, setMerchImage] = useState<string | null>(null);
  const [merchTitle, setMerchTitle] = useState('');
  const [isGalleryEnabled, setIsGalleryEnabled] = useState(false);
  const galleryInputRef = useRef<HTMLInputElement>(null);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState('shouts');
  const [contactInfo, setContactInfo] = useState<Array<{ type: string; value: string }>>([]);
  const [showContactForm, setShowContactForm] = useState(false);
  const [isContactEnabled, setIsContactEnabled] = useState(false);
  const [isShoutMediaEnabled, setIsShoutMediaEnabled] = useState(false);
  const [newContact, setNewContact] = useState({
    type: 'phone', // Default type
    value: ''
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  
  // New state for thumbnail links
  const [bigThumbnailImage, setBigThumbnailImage] = useState<string | null>(null);
  const [smallThumbnailImages, setSmallThumbnailImages] = useState<[string | null, string | null]>([null, null]);
  const bigThumbnailInputRef = useRef<HTMLInputElement>(null);
  const smallThumbnailInputRefs = useRef<[HTMLInputElement | null, HTMLInputElement | null]>([null, null]);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMerchImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setMerchImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGalleryImageAdd = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files[0]) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        if (result) {
          setGalleryImages(prev => [...prev, result as string]);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddContactInfo = () => {
    if (newContact.value.trim()) {
      setContactInfo([...contactInfo, newContact]);
      setNewContact({ type: 'phone', value: '' });
      setShowContactForm(false);
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 3000);
    }
  };

  const handleContactTypeChange = (type: string) => {
    setNewContact({ ...newContact, type });
  };

  // Handle big thumbnail image upload
  const handleBigThumbnailClick = () => {
    bigThumbnailInputRef.current?.click();
  };

  const handleBigThumbnailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setBigThumbnailImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle small thumbnail image upload
  const handleSmallThumbnailClick = (index: number) => {
    smallThumbnailInputRefs.current[index]?.click();
  };

  const handleSmallThumbnailChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newImages = [...smallThumbnailImages] as [string | null, string | null];
        newImages[index] = e.target?.result as string;
        setSmallThumbnailImages(newImages);
      };
      reader.readAsDataURL(file);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[32px] min-h-[90vh]">
        {/* Fixed Header */}
        <div className="sticky top-0 bg-white rounded-t-[32px] p-6 pb-2 z-10">
          <div className="flex items-center justify-end">
            <button 
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 pt-0 overflow-y-auto max-h-[calc(90vh-80px)]">
          {/* Hidden file inputs */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageChange}
            accept="image/*"
            className="hidden"
          />
          <input
            type="file"
            ref={bigThumbnailInputRef}
            onChange={handleBigThumbnailChange}
            accept="image/*"
            className="hidden"
          />
         <input
  type="file"
  ref={el => {
    smallThumbnailInputRefs.current[0] = el;
  }}
  onChange={(e) => handleSmallThumbnailChange(e, 0)}
  accept="image/*"
  className="hidden"
/>
<input
  type="file"
  ref={el => {
    smallThumbnailInputRefs.current[1] = el;
  }}
  onChange={(e) => handleSmallThumbnailChange(e, 1)}
  accept="image/*"
  className="hidden"
/>


          {/* Profile Picture Section */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#d3f0e3] to-[#c1e4d3] p-1">
                <img
                  src={profileImage}
                  alt="Profile character"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <button 
                onClick={handleImageClick}
                className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 cursor-pointer"
              >
                <span className="text-xl cursor-pointer">+</span>
              </button>
            </div>
            <h3 className="text-lg font-semibold mt-3">Alex James</h3>
            <p className="text-sm text-gray-500">@alexjames</p>
          </div>

          {/* Header with Bio Title */}
          <div className="flex items-center justify-between mb-6 mt-6">
            <div>
              <h2 className="text-2xl font-bold">Bio</h2>
              <p className="text-gray-600 text-sm">Add a bio to your profile</p>
            </div>
          </div>

          {/* Bio Toggle Section */}
          <div className="bg-gradient-to-r from-[#d3f0e3] to-[#c1e4d3] rounded-2xl p-4 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold">Enable Bio</h3>
                <p className="text-sm text-gray-600">Show bio on your profile</p>
              </div>
              <button 
                onClick={() => setIsBioEnabled(!isBioEnabled)}
                className={`w-12 h-6 rounded-full transition-colors duration-200 ease-in-out relative ${
                  isBioEnabled ? 'bg-[#98e6c3]' : 'bg-gray-300'
                }`}
              >
                <span 
                  className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ease-in-out ${
                    isBioEnabled ? 'transform translate-x-6' : ''
                  }`}
                />
              </button>
            </div>

            {isBioEnabled && (
              <div className="mt-4">
                <textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  placeholder="Write something about yourself..."
                  className="w-full h-32 p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
                  maxLength={150}
                />
                <div className="flex justify-between mt-2">
                  <p className="text-xs text-gray-500">Max 150 characters</p>
                  <p className="text-xs text-gray-500">{bio.length}/150</p>
                </div>
              </div>
            )}
          </div>

          {/* Add No Thumbnail Link Button */}
          <div 
            onClick={() => setShowFeaturedLinks(!showFeaturedLinks)}
            className="w-full h-14 bg-gradient-to-r from-[#98e6c3] to-[#4a725f] rounded-2xl flex items-center justify-center cursor-pointer hover:opacity-95 transition-opacity mb-6"
          >
            <span className="text-white font-medium">+ Add No Thumbnail link</span>
          </div>

          {/* Featured Links Section */}
          {showFeaturedLinks && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Featured Links</h2>
                <Link to="/featuredlinkform">
                  <Button className="bg-gradient-to-r from-[#98e6c3] to-[#4a725f] font-medium py-1.5 px-4 rounded-md text-sm cursor-pointer">
                    Start Now
                  </Button>
                </Link>
              </div>

              {/* Big Thumbnail Link */}
              <div 
                onClick={handleBigThumbnailClick}
                className="w-full h-40 rounded-2xl mb-4 flex flex-col items-center justify-center cursor-pointer overflow-hidden relative"
                style={{
                  background: bigThumbnailImage 
                    ? `url(${bigThumbnailImage}) center/cover` 
                    : 'linear-gradient(to right, #98e6c3, #4a725f)'
                }}
              >
                {!bigThumbnailImage && (
                  <>
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mb-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                        <line x1="12" y1="8" x2="12" y2="16"/>
                        <line x1="8" y1="12" x2="16" y2="12"/>
                      </svg>
                    </div>
                    <span className="text-white text-sm">Add Big Thumbnail link</span>
                  </>
                )}
              </div>

              {/* Small Thumbnail Links Container */}
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                {/* Small Thumbnail Link 1 */}
                <div 
                  onClick={() => handleSmallThumbnailClick(0)}
                  className="w-full sm:flex-1 h-28 rounded-2xl flex flex-col items-center justify-center cursor-pointer overflow-hidden relative"
                  style={{
                    background: smallThumbnailImages[0] 
                      ? `url(${smallThumbnailImages[0]}) center/cover` 
                      : 'linear-gradient(to right, #98e6c3, #4a725f)'
                  }}
                >
                  {!smallThumbnailImages[0] && (
                    <>
                      <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                          <line x1="12" y1="8" x2="12" y2="16"/>
                          <line x1="8" y1="12" x2="16" y2="12"/>
                        </svg>
                      </div>
                      <span className="text-white text-xs">Add Small Thumbnail link</span>
                    </>
                  )}
                </div>

                {/* Small Thumbnail Link 2 */}
                <div 
                  onClick={() => handleSmallThumbnailClick(1)}
                  className="w-full sm:flex-1 h-28 rounded-2xl flex flex-col items-center justify-center cursor-pointer overflow-hidden relative"
                  style={{
                    background: smallThumbnailImages[1] 
                      ? `url(${smallThumbnailImages[1]}) center/cover` 
                      : 'linear-gradient(to right, #98e6c3, #4a725f)'
                  }}
                >
                  {!smallThumbnailImages[1] && (
                    <>
                      <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                          <line x1="12" y1="8" x2="12" y2="16"/>
                          <line x1="8" y1="12" x2="16" y2="12"/>
                        </svg>
                        
                      </div>
                      
                      <span className="text-white text-xs">Add Small Thumbnail link</span>
                      
                    </>
                    
                  )}
                  
                </div>
                
              </div>
              
            </div>
          )}

          {/* Merch Section */}
          <div className="bg-gradient-to-r from-[#d3f0e3] to-[#c1e4d3] rounded-2xl p-4 mb-6">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h3 className="text-lg font-bold">Merch (0 Items)</h3>
                <p className="text-sm text-gray-600">Manage Merch</p>
              </div>
              <button 
                className={`w-12 h-6 rounded-full transition-colors duration-200 ease-in-out relative ${
                  isMerchEnabled ? 'bg-[#98e6c3]' : 'bg-gray-300'
                }`}
                onClick={() => setIsMerchEnabled(!isMerchEnabled)}
              >
                <span 
                  className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ease-in-out ${
                    isMerchEnabled ? 'transform translate-x-6' : ''
                  }`}
                />
              </button>
            </div>
            {isMerchEnabled && (
              <div className="mt-4">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#98e6c3] to-[#4a725f] rounded-xl flex items-center justify-center cursor-pointer relative overflow-hidden">
                    <input
                      type="file"
                      onChange={handleMerchImageChange}
                      accept="image/*"
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                    {merchImage ? (
                      <img src={merchImage} alt="Merch" className="w-full h-full object-cover" />
                    ) : (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                        <line x1="12" y1="8" x2="12" y2="16"/>
                        <line x1="8" y1="12" x2="16" y2="12"/>
                      </svg>
                    )}
                  </div>
                  <input
                    type="text"
                    placeholder="Add merch title..."
                    value={merchTitle}
                    onChange={(e) => setMerchTitle(e.target.value)}
                    className="flex-1 p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Gallery Section */}
          <div className="bg-gradient-to-r from-[#d3f0e3] to-[#c1e4d3] rounded-2xl p-4 mb-6">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h3 className="text-lg font-bold">Gallery</h3>
                <p className="text-sm text-gray-600">Add Bio to your profile</p>
              </div>
              <button 
                className={`w-12 h-6 rounded-full transition-colors duration-200 ease-in-out relative ${
                  isGalleryEnabled ? 'bg-[#98e6c3]' : 'bg-gray-300'
                }`}
                onClick={() => setIsGalleryEnabled(!isGalleryEnabled)}
              >
                <span 
                  className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ease-in-out ${
                    isGalleryEnabled ? 'transform translate-x-6' : ''
                  }`}
                />
              </button>
            </div>
            {isGalleryEnabled && (
              <div className="mt-4">
                <div className="grid grid-cols-3 gap-4">
                  {galleryImages.map((image, index) => (
                    <div key={index} className="aspect-square bg-gradient-to-r from-[#98e6c3] to-[#4a725f] rounded-xl overflow-hidden">
                      <img src={image} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div 
                    className="aspect-square bg-gradient-to-r from-[#98e6c3] to-[#4a725f] rounded-xl flex items-center justify-center cursor-pointer relative"
                    onClick={() => galleryInputRef.current?.click()}
                  >
                    <input
                      type="file"
                      ref={galleryInputRef}
                      onChange={handleGalleryImageAdd}
                      accept="image/*"
                      className="hidden"
                    />
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                      <line x1="12" y1="8" x2="12" y2="16"/>
                      <line x1="8" y1="12" x2="16" y2="12"/>
                    </svg>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Contact Info Section */}
          <div className="bg-gradient-to-r from-[#d3f0e3] to-[#c1e4d3] rounded-2xl p-4 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Contact Info</h3>
              <button 
                onClick={() => setIsContactEnabled(!isContactEnabled)}
                className={`w-12 h-6 rounded-full transition-colors duration-200 ease-in-out relative ${
                  isContactEnabled ? 'bg-[#98e6c3]' : 'bg-gray-300'
                }`}
              >
                <span 
                  className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ease-in-out ${
                    isContactEnabled ? 'transform translate-x-6' : ''
                  }`}
                />
              </button>
            </div>

            {isContactEnabled && (
              <>
                {showSuccessMessage && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded-lg mb-4">
                    Contact information added successfully!
                  </div>
                )}

                <div className="space-y-3 mb-4">
                  {contactInfo.map((info, index) => (
                    <div 
                      key={index}
                      className="w-full h-12 bg-gradient-to-r from-[#98e6c3] to-[#4a725f] rounded-xl flex items-center px-4"
                    >
                      <span className="text-white capitalize mr-2">{info.type}:</span>
                      <span className="text-white">{info.value}</span>
                    </div>
                  ))}
                </div>

                {showContactForm ? (
                  <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
                    <div className="flex gap-2 mb-4">
                      <button
                        onClick={() => handleContactTypeChange('phone')}
                        className={`px-4 py-2 rounded-full text-sm ${
                          newContact.type === 'phone' 
                            ? 'bg-gradient-to-r from-[#98e6c3] to-[#4a725f] text-white' 
                            : 'bg-gray-100'
                        }`}
                      >
                        Phone
                      </button>
                      <button
                        onClick={() => handleContactTypeChange('email')}
                        className={`px-4 py-2 rounded-full text-sm ${
                          newContact.type === 'email' 
                            ? 'bg-gradient-to-r from-[#98e6c3] to-[#4a725f] text-white' 
                            : 'bg-gray-100'
                        }`}
                      >
                        Email
                      </button>
                      <button
                        onClick={() => handleContactTypeChange('url')}
                        className={`px-4 py-2 rounded-full text-sm ${
                          newContact.type === 'url' 
                            ? 'bg-gradient-to-r from-[#98e6c3] to-[#4a725f] text-white' 
                            : 'bg-gray-100'
                        }`}
                      >
                        URL
                      </button>
                    </div>
                    <input
                      type={newContact.type === 'email' ? 'email' : 'text'}
                      placeholder={`Enter your ${newContact.type}...`}
                      value={newContact.value}
                      onChange={(e) => setNewContact({ ...newContact, value: e.target.value })}
                      className="w-full p-3 border border-gray-200 rounded-xl mb-4"
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={handleAddContactInfo}
                        className="flex-1 h-12 bg-gradient-to-r from-[#98e6c3] to-[#4a725f] rounded-xl text-white font-medium"
                      >
                        Add
                      </button>
                      <button
                        onClick={() => setShowContactForm(false)}
                        className="flex-1 h-12 bg-gray-100 rounded-xl text-gray-600 font-medium"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => setShowContactForm(true)}
                    className="w-full h-12 bg-gradient-to-r from-[#98e6c3] to-[#4a725f] rounded-xl flex items-center justify-center text-white font-medium"
                  >
                    + Add Contact Info
                  </button>
                )}
              </>
            )}
          </div>

          {/* Shouts/Media Section */}
          <div className="bg-gradient-to-r from-[#d3f0e3] to-[#c1e4d3] rounded-2xl p-4 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Shouts/Media</h3>
              <button 
                onClick={() => setIsShoutMediaEnabled(!isShoutMediaEnabled)}
                className={`w-12 h-6 rounded-full transition-colors duration-200 ease-in-out relative ${
                  isShoutMediaEnabled ? 'bg-[#98e6c3]' : 'bg-gray-300'
                }`}
              >
                <span 
                  className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ease-in-out ${
                    isShoutMediaEnabled ? 'transform translate-x-6' : ''
                  }`}
                />
              </button>
            </div>

            {isShoutMediaEnabled && (
              <>
                <div className="flex gap-4 mb-4">
                  <button
                    onClick={() => setActiveTab('shouts')}
                    className={`px-6 py-2 rounded-full ${
                      activeTab === 'shouts' 
                        ? 'bg-gradient-to-r from-[#98e6c3] to-[#4a725f] text-white' 
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    Shouts
                  </button>
                  <button
                    onClick={() => setActiveTab('media')}
                    className={`px-6 py-2 rounded-full ${
                      activeTab === 'media' 
                        ? 'bg-gradient-to-r from-[#98e6c3] to-[#4a725f] text-white' 
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    Media
                  </button>
                </div>

                <div className="text-center py-8">
                  <p className="text-lg font-semibold">No shouts yet!</p>
                  <p className="text-sm text-gray-600">Shouts posted by alex james will appear here</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomLinksTab;