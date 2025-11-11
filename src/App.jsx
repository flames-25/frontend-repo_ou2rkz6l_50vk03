import { useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline'
import { Music, Guitar, PenTool, Sparkles, Mail, Play, Calendar, Disc3, BookOpen, Send, MessageSquare } from 'lucide-react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

// Color palette tokens (earthy greens, golden yellow, wood, white, rich navy)
const colors = {
  greenDeep: '#0b3d2e', // deep rich green
  greenEarth: '#14532d', // earthy green
  gold: '#b58500', // rich golden yellow
  navy: '#0b1b3a', // rich navy
  wood: '#7a5c3b', // warm wood brown
  white: '#ffffff',
}

function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${colors.navy}, ${colors.greenDeep})` }}>
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.25), rgba(0,0,0,0.65))' }} />
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur border" style={{ background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.25)' }}>
          <Sparkles className="w-4 h-4" style={{ color: colors.gold }} />
          <span className="text-sm">Songwriter • Producer • Multi-instrumentalist • Poet</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Crafting sound, words and wonder
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
          Dive into original music, intimate poems, behind-the-scenes sessions, and interactive experiences.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#listen" className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-white font-semibold transition" style={{ backgroundColor: colors.gold }}>
            <Play className="w-5 h-5" /> Listen now
          </a>
          <a href="#poetry" className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-white font-semibold transition" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}>
            <BookOpen className="w-5 h-5" /> Read poetry
          </a>
          <a href="#tour" className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-white font-semibold transition" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}>
            <Calendar className="w-5 h-5" /> Upcoming shows
          </a>
        </div>
      </div>
    </section>
  )
}

function FeatureGrid() {
  const features = [
    { icon: Music, title: 'Original songs', desc: 'Stream exclusive demos, studio versions and live takes.' },
    { icon: Guitar, title: 'Instrument sessions', desc: 'Watch guitar, keys and percussion practice logs.' },
    { icon: PenTool, title: 'Lyrics & process', desc: 'Breakdowns of writing techniques and creative prompts.' },
    { icon: BookOpen, title: 'Poetry corner', desc: 'Short poems, spoken word and micro-prose.' },
  ]
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: colors.white }}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center" style={{ color: colors.navy }}>For fans and the curious</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="p-6 rounded-2xl border hover:shadow transition" style={{ backgroundColor: '#fff', borderColor: '#e5e7eb' }}>
              <f.icon className="w-7 h-7" style={{ color: colors.greenEarth }} />
              <h3 className="mt-3 font-semibold text-lg" style={{ color: colors.navy }}>{f.title}</h3>
              <p className="text-sm mt-1 text-gray-700">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function MusicSection() {
  const [tracks, setTracks] = useState([])
  useEffect(() => {
    fetch(`${API_BASE}/api/tracks`).then(r => r.json()).then(setTracks).catch(() => setTracks([]))
  }, [])
  const demo = tracks.length ? tracks : [
    { title: 'Stardust Letters', description: 'Dreamy alt-pop from the upcoming EP', platform_url: '#' },
    { title: 'Midnight Bicycle', description: 'Lo-fi indie with guitar textures', platform_url: '#' },
    { title: 'Polaroid Skies', description: 'Bedroom folk with analog warmth', platform_url: '#' },
  ]
  return (
    <section id="listen" className="py-16 md:py-24" style={{ backgroundColor: '#f6f8f7' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-2 mb-6" style={{ color: colors.greenEarth }}>
          <Disc3 className="w-5 h-5" /> <h2 className="text-2xl md:text-3xl font-bold">Listen</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {demo.map((t, i) => (
            <a key={i} href={t.platform_url || '#'} className="group p-6 rounded-2xl border transition" style={{ backgroundColor: '#fff', borderColor: '#e5e7eb' }}>
              <div className="h-40 rounded-xl mb-4 transition" style={{ background: `linear-gradient(135deg, ${colors.gold}, ${colors.wood})` }} />
              <h3 className="font-semibold text-lg" style={{ color: colors.navy }}>{t.title}</h3>
              <p className="text-sm text-gray-700">{t.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function PoetrySection() {
  const [poems, setPoems] = useState([])
  useEffect(() => {
    fetch(`${API_BASE}/api/poems`).then(r => r.json()).then(setPoems).catch(() => setPoems([]))
  }, [])
  const demo = poems.length ? poems : [
    { title: 'Paper Planets', body: 'we fold our fears / into tiny stars / and throw them skyward' },
    { title: 'Guitar strings', body: 'six silver roads / to somewhere tender' },
  ]
  return (
    <section id="poetry" className="py-16 md:py-24" style={{ backgroundColor: colors.white }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-2 mb-6" style={{ color: colors.greenEarth }}>
          <BookOpen className="w-5 h-5" /> <h2 className="text-2xl md:text-3xl font-bold">Poetry</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {demo.map((p, i) => (
            <div key={i} className="p-6 rounded-2xl border" style={{ backgroundColor: '#f8faf9', borderColor: '#e5e7eb' }}>
              <h3 className="font-semibold text-lg" style={{ color: colors.navy }}>{p.title}</h3>
              <p className="text-gray-800 whitespace-pre-line">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function EventsSection() {
  const [events, setEvents] = useState([])
  useEffect(() => {
    fetch(`${API_BASE}/api/events`).then(r => r.json()).then(setEvents).catch(() => setEvents([]))
  }, [])
  const demo = events.length ? events : [
    { title: 'Tiny Desk-style session', date_iso: '2025-12-01T20:00:00Z', location: 'Online', description: 'Live acoustic and Q&A' },
    { title: 'Indie Night', date_iso: '2026-01-15T19:30:00Z', location: 'Local Arts House', description: 'Full band set' },
  ]
  return (
    <section id="tour" className="py-16 md:py-24" style={{ backgroundColor: '#f6f8f7' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-2 mb-6" style={{ color: colors.greenEarth }}>
          <Calendar className="w-5 h-5" /> <h2 className="text-2xl md:text-3xl font-bold">Events</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {demo.map((e, i) => (
            <div key={i} className="p-6 rounded-2xl border" style={{ backgroundColor: '#fff', borderColor: '#e5e7eb' }}>
              <h3 className="font-semibold text-lg" style={{ color: colors.navy }}>{e.title}</h3>
              <p className="text-sm text-gray-700">{new Date(e.date_iso).toLocaleString()}</p>
              <p className="text-sm text-gray-700 mb-2">{e.location}</p>
              <p className="text-gray-800">{e.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FanWall() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [status, setStatus] = useState(null)

  const loadPosts = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/fanwall`)
      const data = await res.json()
      setPosts(Array.isArray(data) ? data : [])
    } catch (e) {
      setPosts([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { loadPosts() }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      message: form.get('message'),
      approved: true, // will be auto-checked by backend
    }
    setStatus('loading')
    try {
      const res = await fetch(`${API_BASE}/api/fanwall`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      if (!res.ok) throw new Error(await res.text())
      setStatus('success')
      e.currentTarget.reset()
      loadPosts()
    } catch (err) {
      setStatus('error')
    }
  }

  const demo = posts.length ? posts : [
    { name: 'Sky', message: 'Your latest track is pure warmth. Thank you!' },
    { name: 'Rae', message: 'The poem about paper planets hit me hard.' },
  ]

  return (
    <section id="fanwall" className="py-16 md:py-24" style={{ backgroundColor: colors.white }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-2 mb-6" style={{ color: colors.greenEarth }}>
          <MessageSquare className="w-5 h-5" /> <h2 className="text-2xl md:text-3xl font-bold">Fan Wall</h2>
        </div>
        <div className="grid md:grid-cols-[1fr_380px] gap-6">
          <div className="grid gap-4">
            {loading && posts.length === 0 ? (
              <p className="text-gray-600">Loading messages...</p>
            ) : (
              demo.map((p, i) => (
                <div key={i} className="p-5 rounded-2xl border" style={{ backgroundColor: '#f8faf9', borderColor: '#e5e7eb' }}>
                  <p className="font-semibold" style={{ color: colors.navy }}>{p.name}</p>
                  <p className="text-gray-800">{p.message}</p>
                </div>
              ))
            )}
          </div>
          <div className="p-6 rounded-2xl border" style={{ backgroundColor: '#fff', borderColor: '#e5e7eb' }}>
            <h3 className="font-semibold text-lg mb-2" style={{ color: colors.navy }}>Leave a message</h3>
            <p className="text-sm mb-4 text-gray-700">Kind, respectful notes only. Obvious spam is auto-hidden.</p>
            <form onSubmit={handleSubmit} className="grid gap-3">
              <input name="name" required placeholder="Your name" className="w-full px-4 py-3 rounded-xl border focus:outline-none" style={{ borderColor: '#d1d5db' }} />
              <textarea name="message" required rows={4} placeholder="Your message" className="w-full px-4 py-3 rounded-xl border focus:outline-none" style={{ borderColor: '#d1d5db' }} />
              <button className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-white font-semibold transition w-max" style={{ backgroundColor: colors.greenEarth }}>
                <Send className="w-5 h-5" /> Post
              </button>
              {status === 'success' && <p className="text-green-700">Thanks! Your message may appear after a quick check.</p>}
              {status === 'error' && <p className="text-red-600">Could not post. Please try again.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function SubscribeSection() {
  const [status, setStatus] = useState(null)
  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      source: 'website'
    }
    setStatus('loading')
    try {
      const res = await fetch(`${API_BASE}/api/subscribe`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      if (!res.ok) throw new Error(await res.text())
      setStatus('success')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('error')
    }
  }
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: colors.white }}>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold" style={{ color: colors.navy }}>Join the creative circle</h2>
        <p className="mt-2 text-gray-700">Get fresh songs, poems, sessions and early drops.</p>
        <form onSubmit={handleSubmit} className="mt-6 grid sm:grid-cols-[1fr_auto] gap-3">
          <input name="name" required placeholder="Your name" className="w-full px-4 py-3 rounded-xl border focus:outline-none" style={{ borderColor: '#d1d5db' }} />
          <input name="email" required type="email" placeholder="Email address" className="w-full px-4 py-3 rounded-xl border focus:outline-none" style={{ borderColor: '#d1d5db' }} />
          <button className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-white font-semibold transition" style={{ backgroundColor: colors.gold }}>
            <Mail className="w-5 h-5" /> Subscribe
          </button>
        </form>
        {status === 'success' && <p className="text-green-700 mt-3">Thanks for joining!</p>}
        {status === 'error' && <p className="text-red-600 mt-3">That email may already be subscribed.</p>}
      </div>
    </section>
  )
}

function ContactSection() {
  const [status, setStatus] = useState(null)
  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      message: form.get('message'),
      social: form.get('social') || undefined,
    }
    setStatus('loading')
    try {
      const res = await fetch(`${API_BASE}/api/message`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      if (!res.ok) throw new Error(await res.text())
      setStatus('success')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('error')
    }
  }
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#f6f8f7' }}>
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex items-center gap-2 mb-4" style={{ color: colors.greenEarth }}>
          <Send className="w-5 h-5" /> <h2 className="text-2xl md:text-3xl font-bold">Say hello</h2>
        </div>
        <form onSubmit={handleSubmit} className="grid gap-3">
          <input name="name" required placeholder="Name" className="w-full px-4 py-3 rounded-xl border focus:outline-none" style={{ borderColor: '#d1d5db' }} />
          <textarea name="message" required rows={5} placeholder="Your message" className="w-full px-4 py-3 rounded-xl border focus:outline-none" style={{ borderColor: '#d1d5db' }} />
          <input name="social" placeholder="Link or @handle (optional)" className="w-full px-4 py-3 rounded-xl border focus:outline-none" style={{ borderColor: '#d1d5db' }} />
          <button className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-white font-semibold transition w-max" style={{ backgroundColor: colors.greenEarth }}>
            <Send className="w-5 h-5" /> Send
          </button>
          {status === 'success' && <p className="text-green-700">Message sent. Thank you!</p>}
          {status === 'error' && <p className="text-red-600">Could not send. Try again later.</p>}
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-10 text-center" style={{ backgroundColor: colors.navy, color: 'rgba(255,255,255,0.85)' }}>
      <p>© {new Date().getFullYear()} The Artist • Crafted with love and curiosity</p>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen w-full" style={{ backgroundColor: colors.white }}>
      <Hero />
      <FeatureGrid />
      <MusicSection />
      <PoetrySection />
      <EventsSection />
      <FanWall />
      <SubscribeSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
