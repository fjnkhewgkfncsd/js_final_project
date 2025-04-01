"use client"

import { useParams } from "react-router-dom"
import List from "../Data/collectiondata"
import { useState, useEffect } from "react"
import ProductList from "../components/ProductList"
import "../Styles/Collection.css"

export default function Collection() {
  const { leagueId } = useParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [leagueName, setLeagueName] = useState("")

  useEffect(() => {
    setLoading(true)
    // Find the league data based on the URL parameter
    const leagueData = List.find((league) => {
      // Convert league name to lowercase and replace spaces with hyphens for URL matching
      const formattedLeagueName = league.league.toLowerCase().replace(/\s+/g, "-")
      return formattedLeagueName === leagueId
    })

    if (leagueData) {
      setProducts(leagueData.jersey)
      setLeagueName(leagueData.league)
    } else {
      setProducts([])
      setLeagueName("Not Found")
    }

    setLoading(false)
  }, [leagueId])

  if (loading) {
    return <div className="loading">Loading...</div>
  }

  if (products.length === 0) {
    return <div className="not-found">No products found for this league</div>
  }

  return (
    <div className="collection-container">
      <h1 className="collection-title">{leagueName} Collection</h1>
      <ProductList products={products} />
    </div>
  )
}

