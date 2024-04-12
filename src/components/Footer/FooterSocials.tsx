import SocialMedia from '../SocialMedia/SocialMedia'

export default function FooterSocials() {
  return (
    <div className="footer-section">
      <div className="footer__title">Socials</div>
      <SocialMedia direction='column' mailText={false} colorInverse={true} smallScreenDirection='row' />
    </div>
  )
}
