function value (phone) {
  if (typeof phone !== 'string') {
    return false
  } else {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/
    return phoneRegex.test(phone)
  }         
}