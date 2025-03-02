import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useAuth } from './hooks/useAuth'

export function withAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  return function WithAuthComponent(props: P) {
    const { data: user, isLoading: loading } = useAuth()
    const router = useRouter()

    useEffect(() => {
      if (loading === false && !user) {
        router.push('/')
      }
    }, [user, router])

    // 사용자가 없으면 null을 반환하여 컴포넌트를 렌더링하지 않음
    if (!user) {
      return null
    }

    // 사용자 정보를 props와 함께 전달
    const propsWithUser = {
      ...props,
      user,
      loading
    }

    // 사용자가 있으면 원래 컴포넌트를 렌더링
    return <WrappedComponent {...propsWithUser} />
  }
} 