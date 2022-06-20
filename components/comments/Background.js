export default function Background({ children, title }) {
    return <div className="mb-4">
        <div className="bg-gray-100 px-4 pt-1 pb-1">
            <h4> {title} </h4>
            {children}
        </div>
    </div>
  }
  