import React, { useState, useEffect, useRef } from 'react'

const Icon = ({ name, ...rest }) => {
  const ImportedIconRef = useRef(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const importIcon = async () => {
      try {
        ImportedIconRef.current = await import(
          `!!@svgr/webpack?-svgo,+titleProp,+ref!../../assets/icons/${name}.svg`
        )
      } catch (err) {
        throw err
      } finally {
        setLoading(false)
      }
    }
    importIcon()
  }, [name])

  if (!loading && ImportedIconRef.current) {
    const { current } = ImportedIconRef
    const { default: ImportedIcon } = current

    return <ImportedIcon {...rest} />
  }

  return null
}

export default Icon