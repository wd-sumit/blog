export const env = (key, defaultValue = null) => {
  const value = process.env[key];

  if (value === 'true') return true;
  if (value === 'false') return false;

  return value || defaultValue;
};

export const normalizePort = (value) => {
  const port = parseInt(value);

  if (Number.isNaN(port)) return port;
  return port > 0 ? port : 'false';
};
