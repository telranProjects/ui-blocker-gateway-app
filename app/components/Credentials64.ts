interface Props {
    login: string;
    password: string;
}

const Credentials64 = ({login, password}: Props): string => {
    const credentials = `${login}:${password}`;
    const auth64 = btoa(credentials);

  return auth64;
}

export default Credentials64