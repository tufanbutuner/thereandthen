type FooterProps = {
  email: string;
};

export default function Footer({ email }: FooterProps) {
  return (
    <footer className="footer">
      <p>
        <a href={`mailto:${email}`}>{email}</a>
      </p>
      <p>Hackney, London, United Kingdom</p>
    </footer>
  );
}
