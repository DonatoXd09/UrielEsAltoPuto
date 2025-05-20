import React from 'react';

const ShareButtons = () => {
  const shareUrl = window.location.href;
  const shareText = "¡Ayudá a que el mundo se entere que Uriel es alto puto! Únete al contador global:";

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`, '_blank');
  };

  const shareOnWhatsApp = () => {
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`, '_blank');
  };

  return (
    <div className="flex space-x-4 mt-8">
      <button onClick={shareOnTwitter} className="px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors">
        Compartir en Twitter
      </button>
      <button onClick={shareOnFacebook} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
        Compartir en Facebook
      </button>
      <button onClick={shareOnWhatsApp} className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
        Compartir en WhatsApp
      </button>
    </div>
  );
};

export default ShareButtons;
