import React, { useEffect } from 'react';

interface MetaTagManagerProps {
  title: string;
  description: string;
}

const MetaTagManager: React.FC<MetaTagManagerProps> = ({ title, description }) => {
  useEffect(() => {
    document.title = title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
  }, [title, description]);

  return null; // This component does not render anything
};

export default MetaTagManager;