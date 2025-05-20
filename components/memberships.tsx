const Memberships = () => {
  const memberships = [
    {
      name: "American Geophysical Union (AGU)",
      logo: "/placeholder.svg?height=80&width=80",
      status: "Member since 1990",
    },
    {
      name: "Indian Geophysical Union (IGU)",
      logo: "/placeholder.svg?height=80&width=80",
      status: "Fellow",
    },
    {
      name: "Geological Society of India (GSI)",
      logo: "/placeholder.svg?height=80&width=80",
      status: "Life Member",
    },
    {
      name: "Association of Exploration Geophysicists (AEG)",
      logo: "/placeholder.svg?height=80&width=80",
      status: "Member since 1985",
    },
        
  ]

  return (
    <section id="memberships" className="section-container">
      <h2 className="section-title">Professional Memberships</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {memberships.map((membership, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-20 h-20 mb-3 bg-white rounded-full shadow-md flex items-center justify-center p-2">
              <img
                src={membership.logo || "/placeholder.svg"}
                alt={`${membership.name} logo`}
                className="max-w-full max-h-full"
              />
            </div>
            <h3 className="text-sm font-bold text-[#003865]">{membership.name}</h3>
            <p className="text-xs text-gray-600">{membership.status}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Memberships
