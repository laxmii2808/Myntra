document.addEventListener('DOMContentLoaded', () => {
  const likeButtons = document.querySelectorAll('.like-button');
  const commentButtons = document.querySelectorAll('.comment-button');
  const shareButtons = document.querySelectorAll('.share-button');
  const buttone=document.getElementById('sharelist');

  likeButtons.forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('liked');
    });
  });

  commentButtons.forEach(button => {
    button.addEventListener('click', () => {
      alert('Comment functionality coming soon!');
    });
  });

  shareButtons.forEach(button => {
    button.addEventListener('click', async () => {
      
      buttone.classList.toggle('sharelist');
    });
});

const pageUrl = window.location.href;
  const pageTitle = document.title;

  document.getElementById('facebook-share').addEventListener('click', () => {
      const facebookUrl = https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)};
      window.open(facebookUrl, '_blank');
  });

  document.getElementById('twitter-share').addEventListener('click', () => {
      const twitterUrl = https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(pageTitle)};
      window.open(twitterUrl, '_blank');
  });

  document.getElementById('linkedin-share').addEventListener('click', () => {
      const linkedinUrl = https://www.linkedin.com/shareArticle?url=${encodeURIComponent(pageUrl)}&title=${encodeURIComponent(pageTitle)};
      window.open(linkedinUrl, '_blank');
  });
});