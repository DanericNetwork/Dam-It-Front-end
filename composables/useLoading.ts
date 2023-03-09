const loading = ref<boolean>(false)

export default function useLoading() {
   const start = () => (loading.value = true)
   const stop = () => (loading.value = false)
   return { loading, start, stop }
}
