export default function setActivePage(title, pageId) {
  return {
    type: 'SET_ACTIVE_PAGE',
    title,
    page: pageId,
  }
}
