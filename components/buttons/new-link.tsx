"use client"

import React from 'react'

import { Plus } from 'lucide-react';

import { NewLinkForm } from '@/components/forms/new-link';
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/wrappers/modal';

const NewLinkButton = () => {
    return (
        <Modal
            title='New Link'
            description='Create a new shortened link'
            content={() => (<NewLinkForm />)}
        >
            <Button>
                <Plus /><span>New Link</span>
            </Button>
        </Modal>
    )
}

export { NewLinkButton }