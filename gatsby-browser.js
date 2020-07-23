// Service worker update message
export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `Snapscreen has been updated. ` +
      `Reload to display the latest version?`
  )

  if (answer === true) {
    window.location.reload()
  }
}
