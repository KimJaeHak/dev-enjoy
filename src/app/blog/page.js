// src/app/blog/page.js - 새로 생성
export default function BlogHome() {
  const posts = [
    {
      title: '첫 번째 블로그 글',
      slug: 'first-post',
      date: '2025-07-25',
      description: '블로그를 시작하면서 느낀 점들을 정리해봤습니다.',
    },
    {
      title: 'Vercel 배포 가이드',
      slug: 'vercel-guide', 
      date: '2025-07-25',
      description: 'Next.js 프로젝트를 Vercel에 배포하는 방법을 정리했습니다.',
    }
  ]

  return (
    <div className="max-w-4xl mx-auto p-8">
      <header className="mb-10">
        <h1 className="text-4xl font-bold mb-4">개발 블로그</h1>
        <p className="text-gray-600">개발하면서 배운 것들을 기록합니다</p>
      </header>
      
      <main>
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="border-b pb-6">
              <h2 className="text-2xl font-semibold mb-2">
                <a href={`/blog/${post.slug}`} className="hover:text-blue-600">
                  {post.title}
                </a>
              </h2>
              <p className="text-gray-600 mb-2">{post.date}</p>
              <p className="text-gray-800">{post.description}</p>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}