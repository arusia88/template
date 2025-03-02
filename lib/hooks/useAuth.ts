import { useQuery } from '@tanstack/react-query'
import { createClient } from '@/lib/supabase/client'

const fetchUser = async () => {
    const supabase = createClient()
    const { data: { user }, error } = await supabase.auth.getUser()
    
    if (error) {
        throw error
    }
    
    return user
}

export const useAuth = () => {
    return useQuery({
        queryKey: ['user'],
        queryFn: fetchUser,
        staleTime: Infinity, // 사용자 정보는 자주 변경되지 않으므로 staleTime을 Infinity로 설정
        retry: false, // 인증 실패 시 재시도하지 않음
    })
} 