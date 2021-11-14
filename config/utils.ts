import path from 'path';

export const PATHS = {
  src: path.resolve(__dirname, '../src'),
  build: path.resolve(__dirname, '../build'),
  public: path.resolve(__dirname, '../public'),
};

type GetEnvironmentVariablesOptions = {
  /**
   * The name to use to scope the environment variables. Can be the name of the app.
   * If its say 'APP' only environment variables prefixed with 'APP_' will be returned.
   * @default ''
   */
  scope?: string;

  /**
   * A function to format the environment variable values.
   * @default JSON.stringify
   */
  formatEnvVarValue?: (value: string) => string;
};

/**
 * Gets the environment variables from the process.env object and formats them in away accepted by webpack.DefinePlugin
 * @param options The options to configure how the environment variables are returned.
 * @returns An object containing the environment variables
 */
export const getEnvironmentVariables = ({
  scope = '',
  formatEnvVarValue = JSON.stringify,
}: GetEnvironmentVariablesOptions = {}): Record<string, string> => {
  const environmentVariables = Object.entries(process.env).reduce(
    (allVariables, [currentKey, currentValue]) => {
      if (currentKey.startsWith(scope)) {
        allVariables[currentKey] = formatEnvVarValue(currentValue);
      }
      return allVariables;
    },
    {},
  );
  return environmentVariables;
};
