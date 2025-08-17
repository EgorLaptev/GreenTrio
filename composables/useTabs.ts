import { ref, computed, readonly } from 'vue'
import type { TabItem } from '~/types'

export const useTabs = (initialTabs: TabItem[], defaultTab?: string) => {
  const tabs = ref<TabItem[]>(initialTabs)
  const activeTab = ref(defaultTab || initialTabs[0]?.id || '')
  const showTabsContent = ref(true)

  const activeTabContent = computed(() => {
    return tabs.value.find(tab => tab.id === activeTab.value)?.content || ''
  })

  const openTab = (tabId: string) => {
    if (tabs.value.some(tab => tab.id === tabId)) {
      activeTab.value = tabId
    }
  }

  const addTab = (tab: TabItem) => {
    tabs.value.push(tab)
    if (!activeTab.value) {
      activeTab.value = tab.id
    }
  }

  const removeTab = (tabId: string) => {
    const index = tabs.value.findIndex(tab => tab.id === tabId)
    if (index > -1) {
      tabs.value.splice(index, 1)
      // If we're removing the active tab, switch to the first available tab
      if (activeTab.value === tabId) {
        activeTab.value = tabs.value[0]?.id || ''
      }
    }
  }

  const toggleTabsContent = () => {
    showTabsContent.value = !showTabsContent.value
  }

  const isTabActive = (tabId: string) => activeTab.value === tabId

  return {
    tabs: readonly(tabs),
    activeTab,
    activeTabContent,
    showTabsContent,
    openTab,
    addTab,
    removeTab,
    toggleTabsContent,
    isTabActive
  }
}

