import { reactive } from 'vue';

export function useSnackbar() {
  let snackbar = reactive({
    show: false,
    color: '',
    text: ''
  });

  const showSnackbar = (text: string, color = 'success') => {
    snackbar = { show: true, text, color };
  }

  function hideSnackbar() {
    snackbar.show = false;
  }

  return { snackbar, showSnackbar, hideSnackbar };
}
