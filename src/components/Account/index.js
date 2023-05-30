import Icon from '../Icon'
import BackButton from '../BackButton'
import Header from '../Header'
import Footer from '../Footer'

const Account = () => (
  <div className="home">
    <Header label="Compte" icon="logo" />

    <div className="main-body">
      <div className="logo-bg">
        <Icon id="logo" />
      </div>

      <BackButton />
    </div>

    <Footer />
  </div>
)

export default Account
