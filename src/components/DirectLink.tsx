import { useState } from 'react';
import bground from "../../public/assets/lightbg.png";
import { templateKeys, getTemplateComponent } from './templates';

const DirectLink = () => {
  // Store selected template key instead of index
  const [selectedTemplate, setSelectedTemplate] = useState<string>('template3'); // Default to template3 (3rd one)

  const handleTemplateClick = (templateKey: string) => {
    setSelectedTemplate(templateKey);
  };

  // Get the component for the selected template
  const SelectedTemplateComponent = getTemplateComponent(selectedTemplate);

  return (
    <div className="w-full h-[calc(100vh-30px)] flex flex-col lg:flex-row p-1 bg-cover bg-center"
    style={{ backgroundImage: `url(${bground})` }}
    
    >
      {/* First div - Takes full height */}
      <div className="flex-1 w-[65%] flex items-center justify-center p-8">
        {/* Selected Template Preview */}
        <div className="scale-110 transform">
          {SelectedTemplateComponent && <SelectedTemplateComponent isPreview={true} />}
        </div>
      </div>

      {/* Second div - With vertical scrollbar */}
      <div className="w-full lg:w-[35%] overflow-y-auto scrollbar-hide">
        {/* Cards placed vertically */}
        <div className="flex flex-col space-y-6 items-center justify-center">
          {templateKeys.map((templateKey) => {
            const TemplateComponent = getTemplateComponent(templateKey);
            
            if (!TemplateComponent) return null;
            
            return (
              <div
                key={templateKey}
                className= {`cursor-pointer ${
                  selectedTemplate === templateKey ? "ring-2 ring-purple-500 rounded-3xl" : ""
                } transition-all duration-300`}
                onClick={() => handleTemplateClick(templateKey)}
              >
                <TemplateComponent isPreview={false} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DirectLink;