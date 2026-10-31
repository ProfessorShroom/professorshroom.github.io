require 'yaml'
require 'date'
require 'time'

module Jekyll
  class GuideComingSoonGenerator < Generator
    safe true
    priority :high

    FRONT_MATTER = /\A\uFEFF?---\s*\r?\n(.*?)\r?\n---\s*(\r?\n|\z)/m

    def generate(site)
      site.data['comingSoonGuides'] = []
      # If future posts are being published, they already show up normally.
      return if site.config['future']

      found = []

      Dir.glob(File.join(site.source, '_posts', '**', '*.{md,markdown,html}')).each do |path|
        raw = File.read(path, encoding: 'utf-8')
        match = raw.match(FRONT_MATTER)
        next unless match

        data = YAML.safe_load(match[1], permitted_classes: [Date, Time], aliases: true) || {}
        next unless data.is_a?(Hash)
        next if data['published'] == false

        tags = Array(data['tags']).map { |t| t.to_s.downcase }
        next unless tags.include?('guide') || tags.include?('guides')

        base = File.basename(path, File.extname(path))
        slug = base.sub(/^\d{4}-\d{2}-\d{2}-/, '').downcase
        title = data['title'].to_s.strip
        next if slug == 'template' || title.downcase == 'template'

        date = data['date']
        date = Time.parse(date) if date.is_a?(String)
        date = date.to_time if date && !date.is_a?(Time)
        if date.nil? && base =~ /^(\d{4}-\d{2}-\d{2})-/
          date = Time.parse(Regexp.last_match(1))
        end
        next if date.nil? || date <= site.time

        found << {
          'title'       => title.empty? ? base : title,
          'description' => data['description'].to_s,
          'date'        => date
        }
      end

      site.data['comingSoonGuides'] = found.sort_by { |g| [g['date'], g['title'].downcase] }
    end
  end
end
