const useBaseFetch = async (url: string, opts: object) => {
  const config = useRuntimeConfig()
  return await useFetch(url, { baseURL: config.baseURL, ...opts })
}

export default useBaseFetch
