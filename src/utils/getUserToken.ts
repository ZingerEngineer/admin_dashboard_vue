export const getUserToken = () => {
  let res = null
  if (!localStorage.getItem('token')) {
    return res
  }
  res = localStorage.getItem('token')
  return res
}
