interface IWrapper {
  children: React.ReactElement;
}

export const Wrapper: React.FC<IWrapper> = ({ children }) => {
  return <div className="container">{children}</div>;
};
