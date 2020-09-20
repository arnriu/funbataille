import React, { useState, useEffect, useRef } from 'react'

const Icon = ({ name, type, ...rest }) => {
  const ImportedIconRef = useRef(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const importIcon = async () => {
      try {
        ImportedIconRef.current = await import(
          // `!!@svgr/webpack?-svgo,+titleProp,+ref!../../assets/${
            `../../assets/${
            type ?? 'icons'
          }/${name}.svg`
        ).createElement
      } catch (err) {
        throw err
      } finally {
        setLoading(false)
      }
    }
    importIcon()
  }, [name, type])

  if (!loading && ImportedIconRef.current) {
    const { current } = ImportedIconRef
    const { default: ImportedIcon } = current

    return <ImportedIcon {...rest} />
  }

  return null
}

export default Icon
