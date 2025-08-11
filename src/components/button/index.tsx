import { useNavigate } from 'react-router-dom'
import { ButtonContainer, ButtonLink } from './styles'

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
}


const Button = ({ type, title, to, onClick, children }: Props) => {
  const navigate = useNavigate()
  const handleClick = () => {
    if (onClick) {
      onClick()
    } else if (to) {
      navigate(to)
    }
  }

  if (type === 'button') {
    return (
      <ButtonContainer type="button" title={title} onClick={handleClick}>
        {children}
      </ButtonContainer>
    )
  }


  if (to) {
    return (
      <ButtonLink to={to} title={title}>
        {children}
      </ButtonLink>
    )
  }


  return (
    <ButtonContainer type="button" title={title}>
      {children}
    </ButtonContainer>
  )
}

export default Button
