import Link from 'next/link';
import { profile, isPlaceholderLink } from '@/data/profile';
import { ProfileLink } from './ProfileLink';
import { ArrowUpRight } from './Icons';
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="contact-row">
          <div>
            <p className="eyebrow">LET’S CONNECT</p>
            <h2>
              Good work starts
              <br />
              with a conversation.
            </h2>
          </div>
          <div className="contact-links">
            {isPlaceholderLink(profile.email) ? (
              <span className="contact-email">Email coming soon</span>
            ) : (
              <a className="contact-email" href={`mailto:${profile.email}`}>
                {profile.email}
                <ArrowUpRight />
              </a>
            )}
            <div className="social-links">
              <ProfileLink href={profile.links.github}>GitHub</ProfileLink>
              <ProfileLink href={profile.links.linkedin}>LinkedIn</ProfileLink>
              <ProfileLink href={profile.links.huggingface}>
                Hugging Face
              </ProfileLink>
            </div>
            {[
              profile.email,
              profile.links.github,
              profile.links.linkedin,
              profile.links.huggingface,
            ].some(isPlaceholderLink) && (
              <p className="small muted">Contact links are being updated.</p>
            )}
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span>Learning from data. Building for the physical world.</span>
          <Link href="/notes">
            Technical notes <ArrowUpRight />
          </Link>
        </div>
      </div>
    </footer>
  );
}
