const form = document.getElementById('form');
const regEx = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const isMailCorrect = () =>
{
    if (!regEx.test(form.email.value))
    {
        form.email.classList.add('form__input--error');
        form.email.parentElement.classList.add('form__input-field--error');
        form.email.setAttribute('aria-invalid', 'true');
        return false;
    }
    return true;
}

form.email.addEventListener('focus', () =>
{
    form.email.classList.remove('form__input--error');
    form.email.parentElement.classList.remove('form__input-field--error');
    form.email.removeAttribute('aria-invalid');
});

form.addEventListener('submit', (e) =>
{
    if ((!isMailCorrect()) && (form.email.value.length === 0)) e.preventDefault();
});