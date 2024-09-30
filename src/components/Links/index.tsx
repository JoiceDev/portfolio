import React from 'react'
import * as Style from './styles'

const SocialLinks = () => (
  <Style.SocialLinksContainer>
    <ul className="social-links">
      <li>
        <Style.SocialLink
          href="https://www.instagram.com/joicegoncalvesz/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#82589F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-instagram"
            style={{
              transition: 'transform 0.3s ease' // Transição aplicada diretamente
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.3)' // Aumenta ao passar o mouse
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)' // Retorna ao tamanho original
            }}
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </Style.SocialLink>
      </li>
      <li>
        <Style.SocialLink
          href="https://www.linkedin.com/in/joicegoncalves-dev/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#82589F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-linkedin"
            style={{
              transition: 'transform 0.3s ease' // Transição aplicada diretamente
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.3)' // Aumenta ao passar o mouse
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)' // Retorna ao tamanho original
            }}
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </Style.SocialLink>
      </li>
      <li>
        <Style.SocialLink
          href="https://github.com/JoiceDev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#82589F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-github"
            style={{
              transition: 'transform 0.3s ease' // Transição aplicada diretamente
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.3)' // Aumenta ao passar o mouse
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)' // Retorna ao tamanho original
            }}
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </Style.SocialLink>
      </li>
      <li>
        <Style.SocialLink
          href="mailto:itjoicegoncalves@gmail.com"
          aria-label="Email"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#82589F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-mail"
            style={{
              transition: 'transform 0.3s ease' // Transição aplicada diretamente
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.3)' // Aumenta ao passar o mouse
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)' // Retorna ao tamanho original
            }}
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </Style.SocialLink>
      </li>
    </ul>
  </Style.SocialLinksContainer>
)

export default SocialLinks
