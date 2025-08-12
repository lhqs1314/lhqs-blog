

const projects = [
  {
    id: 1,
    title: '网址导航',
    description: '一个支持标签导航与聚合搜索的个人站点。现已收集三千多个精选网址，主要解决 bookmark 管理的问题。可以根据 tags 进行筛选，快速得到想要的网址。',
    url: 'https://info.lhqs.ink/',
    image: '/placeholder-nav.jpg',
    tags: ['导航', '搜索', '书签管理']
  },
  {
    id: 2,
    title: 'Finder文件浏览器',
    description: '一个基于 Next.js 构建的现代化文件浏览器，采用类似 macOS Finder 的分栏视图设计，支持20+种文件格式的在线预览功能。为开发者和用户提供高效、直观的文件管理体验。',
    url: 'https://finder.lhqs.ink/',
    image: 'https://pub-aaa727fad5244019b7072db6086f7909.r2.dev/2025/08/12/2d4aa135-949d-4a8b-ad76-d464378e489e.png',
    tags: ['文件管理', 'Next.js', 'macOS']
  },
  {
    id: 3,
    title: '四海创作系统',
    description: '四海创作系统是一个内容创作者管理系统，提供用户认证、内容管理&分享、API集成等功能。该系统由现代化的前端和后端组成，适用于需要管理创作内容和API访问的应用场景。',
    url: 'https://creator.lhqs.ink/',
    image: 'https://pub-aaa727fad5244019b7072db6086f7909.r2.dev/2025/07/09/877cf722-4bbd-493c-ba42-a7e828955d44.png',
    tags: ['内容管理', 'API', '创作系统']
  },
  {
    id: 4,
    title: '极简博客',
    description: '一个极简、现代、内容驱动的个人博客系统，基于 Next.js 15、MDX、Shiki 和 Tailwind CSS 构建，支持高亮、数学公式、响应式设计和流畅的页面转场。',
    url: 'https://github.com/lhqs/lhqs-blog',
    image: '/placeholder-blog.jpg',
    tags: ['博客', 'Next.js', 'MDX']
  },
  {
    id: 5,
    title: 'PDF注释工具',
    description: '一个基于浏览器的PDF注释工具，支持在PDF文档上添加手绘、线条和文本注释，完全在前端运行，无需后端服务。',
    url: 'https://github.com/lhqs/PDFAnnotator',
    image: '/placeholder-pdf.jpg',
    tags: ['PDF', '注释', '前端工具']
  },
  {
    id: 6,
    title: 'Raycast 云存储扩展',
    description: '支持一键上传文件到三大主流云存储：Cloudflare R2、七牛云、阿里云 OSS。表单支持拖拽、点击选择、粘贴文件，自动按日期归档，上传成功自动复制公网 URL 到剪贴板。',
    url: 'https://git.lhqs.ink/raycast/raycast-upload',
    image: '/placeholder-raycast.jpg',
    tags: ['Raycast', '云存储', '上传工具']
  },
  {
    id: 7,
    title: 'Raycast 信息管理系统',
    description: '为 Raycast 提供了一个简单高效的信息收集与管理工具。你可以在 Raycast 内快速录入内容（支持标签），并通过列表页浏览、搜索、分页、查看详情和复制内容。',
    url: 'https://github.com/lhqs/raycast-info-system',
    image: '/placeholder-info.jpg',
    tags: ['Raycast', '信息管理', 'API']
  },
  {
    id: 8,
    title: 'Raycast 网址导航扩展',
    description: '一个 Raycast 扩展，配合主站点导航项目 lhqs-site-nav 使用，实现高效的网址收藏、搜索与自动同步。',
    url: 'https://github.com/lhqs/raycast-site-nav',
    image: '/placeholder-nav-ext.jpg',
    tags: ['Raycast', '导航', '同步']
  },
  {
    id: 9,
    title: 'Raycast 数据库查询工具',
    description: '一个极简的 Raycast 扩展，支持通过 PostgreSQL 数据库执行 SQL 查询。',
    url: 'https://github.com/lhqs/raycast-db',
    image: '/placeholder-db.jpg',
    tags: ['Raycast', 'PostgreSQL', 'SQL']
  },
  {
    id: 10,
    title: '影子分身 - Shadow Splitter',
    description: '一个创新的2D网页平台跳跃游戏，玩家可以创建自己的影子分身，分身会延迟模仿玩家的所有动作。通过本体和分身的协作来解决谜题、击败敌人、完成关卡。',
    url: 'https://github.com/di-ba-yan/ShadowSplitter',
    image: '/placeholder-game.jpg',
    tags: ['游戏', '2D平台', '创新玩法']
  }
]

export default function VisualsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-4">作品集</h1>
        <p className="text-gray-600 dark:text-gray-400">
          这里展示了我开发的各种项目，涵盖了工具类应用、扩展程序、游戏等多个领域。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
          >
            <div className="relative h-48 bg-gray-100 dark:bg-gray-700 overflow-hidden">
              {project.image.startsWith('http') ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-2 bg-gray-300 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">项目截图</span>
                  </div>
                </div>
              )}
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-sm transition-colors"
              >
                查看项目
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
