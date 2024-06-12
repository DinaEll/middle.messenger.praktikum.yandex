import './changeData-page.scss';
export { default as ChangeDataPage } from './changeData-page.hbs?raw';

document.addEventListener('DOMContentLoaded', () => {
    const avatarInput = document.querySelector('.changeData-page__avatar-input');
    const avatarImage = document.querySelector('.chat-page__profile-icon');

    avatarInput.addEventListener('change', handleAvatarUpload);

    function handleAvatarUpload(event) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            avatarImage.src = e.target.result;
        }

        reader.readAsDataURL(file);
    }
});
