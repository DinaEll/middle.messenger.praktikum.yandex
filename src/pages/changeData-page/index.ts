import '../../assets/changeAll-page.scss';

export { default as ChangeDataPage } from './changeData-page.hbs?raw';

document.addEventListener('DOMContentLoaded', () => {
    const avatarInput = document.querySelector('.changeData-page__avatar-input') as HTMLInputElement;
    const avatarImage = document.querySelector('.chat-page__profile-icon') as HTMLImageElement;

    if (avatarInput && avatarImage) {
        avatarInput.addEventListener('change', handleAvatarUpload);
    }

    function handleAvatarUpload(event: Event) {
        const target = event.target as HTMLInputElement;
        const file = target.files?.[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function (e: ProgressEvent<FileReader>) {
                if (e.target && avatarImage) {
                    avatarImage.src = e.target.result as string;
                }
            }

            reader.readAsDataURL(file);
        }
    }
});
