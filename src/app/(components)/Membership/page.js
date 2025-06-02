import React from 'react'
import MembershipForm from './MembershipJsx/MembershipForm'

export const metadata = {
  title: 'SSLT | MEMBERSHIP',
  description: 'This is the Membership page',
}

function Page() {
  return (
    <div>
        <MembershipForm></MembershipForm>
    </div>
  )
}

export default Page