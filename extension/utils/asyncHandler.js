export const asyncHandler = (promise, context, options = {}) => {
  const { logError = true } = options;
  return promise
    .then((data) => {
      return { success: true, data, error: null };
    })
    .catch((err) => {
      if (context) err.context = context;
      if (logError && import.meta.env.DEV) {
        console.error(`[${context}]`, err);
      }
      return { success: false, data: null, error: err };
    });
};
