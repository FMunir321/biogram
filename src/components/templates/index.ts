import { ComponentType } from 'react';
import TemplateOne from './TemplateOne';
import TemplateTwo from './TemplateTwo';
import TemplateThree from './TemplateThree';
import TemplateFour from './TemplateFour';
import TemplateFive from './TemplateFive';
import TemplateSix from './TemplateSix';

export interface TemplateProps {
  isPreview?: boolean;
}

// Template registry - maps template keys to components
export const templateRegistry: Record<string, ComponentType<TemplateProps>> = {
  'template1': TemplateOne,
  'template2': TemplateTwo,
  'template3': TemplateThree,
  'template4': TemplateFour,
  'template5': TemplateFive,
  'template6': TemplateSix,
};

// Template keys array for iteration
export const templateKeys = Object.keys(templateRegistry);

// Helper function to get template component
export const getTemplateComponent = (templateKey: string): ComponentType<TemplateProps> | null => {
  return templateRegistry[templateKey] || null;
};

export {
  TemplateOne,
  TemplateTwo,
  TemplateThree,
  TemplateFour,
  TemplateFive,
  TemplateSix,
};
