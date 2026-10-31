module Jekyll
  class GuideMirrorGenerator < Generator
    safe true
    priority :low

    def generate(site)
      site.posts.docs.each do |post|
        tags = Array(post.data['tags']).map { |t| t.to_s.downcase }
        next unless tags.include?('guide') || tags.include?('guides')

        slug = (post.data['slug'] || post.basename_without_ext.sub(/^\d{4}-\d{2}-\d{2}-/, '')).to_s.downcase
        guide_url = "/guides/#{slug}/"

        post.data['guide_url'] = guide_url

        page = PageWithoutAFile.new(site, site.source, "guides/#{slug}", 'index.md')
        page.content = post.content
        page.data = post.data.merge(
          'layout'        => 'post',
          'permalink'     => guide_url,
          'canonical_url' => post.url,
          'mirror_of'     => post.url,
          'sitemap'       => false
        )
        site.pages << page
      end
    end
  end
end
