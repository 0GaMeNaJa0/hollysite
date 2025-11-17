import { useIsMobile } from '@/hooks/useIsMobile'

const Shader = () => {
    const isMobile = useIsMobile();
  return (
    <div>{isMobile}</div>
  )
}

export default Shader