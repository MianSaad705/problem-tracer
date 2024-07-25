'use client';

import ErrorMessage from '@/app/components/ErrorMessage/ErrorMessage';
import PrimaryLoader from '@/app/components/Loader/PrimaryLoader';
import { issueSchema } from '@/app/Validations/SchemaValidations';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Text, TextField } from '@radix-ui/themes';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import SimpleMdeReact from 'react-simplemde-editor';
import { z } from 'zod';

type IssueForm = z.infer<typeof issueSchema>;
const NewIssue = () => {
    const router = useRouter()
    const [isSubmitting, setSubmitting] = useState(false);
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<IssueForm>({
        resolver: zodResolver(issueSchema),
    });
    return (
        <form onSubmit={handleSubmit(async (data) => {
            try {
                setSubmitting(true);
                await axios.post('/api/issues', data)
                setSubmitting(false);
                router.push('/issues');

            } catch (error) {
                setSubmitting(false)
            }
        })} >
            <Text>Title</Text>
            <TextField.Root className='my-5' placeholder="Enter title" {...register('title')} >
                <TextField.Slot />
            </TextField.Root>
            <ErrorMessage>
                {errors.title?.message}
            </ErrorMessage>
            <Text className='mb-5' as="div"  >Description</Text>
            <Controller
                name="description"
                control={control}
                render={({ field }) => <SimpleMdeReact {...field} />}
            />
            <ErrorMessage>
                {errors.description?.message}
            </ErrorMessage>
            <Button disabled={isSubmitting} >Create Issue {isSubmitting && <PrimaryLoader />} </Button>
        </form>
    )
}

export default NewIssue
