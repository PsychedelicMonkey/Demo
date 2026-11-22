<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import type { SimplePagination, User } from '@/types';
import { Button } from '@/components/ui/button';
import { useInitials } from '@/composables/useInitials';

const { getInitials } = useInitials();

defineProps<{
    users?: SimplePagination<User>;
}>();
</script>

<template>
    <Head title="Home Page" />

    <template v-if="users">
        <div class="overflow-x-auto">
            <table class="table table-zebra">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Date joined</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users.data" :key="user.id">
                        <td>
                            <div class="avatar avatar-placeholder">
                                <div
                                    class="w-10 rounded-full bg-neutral text-neutral-content"
                                >
                                    <span>{{ getInitials(user.name) }}</span>
                                </div>
                            </div>
                        </td>
                        <td>{{ user.name }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.created_at }}</td>
                        <td>
                            <Button>View Profile</Button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="join grid grid-cols-2">
                <Link
                    v-if="users.prev_page_url"
                    :href="users.prev_page_url"
                    preserveScroll
                    class="btn join-item btn-outline"
                >
                    Previous
                </Link>
                <Button v-else variant="outline" class="join-item" disabled>
                    Previous
                </Button>

                <Link
                    v-if="users.next_page_url"
                    :href="users.next_page_url"
                    preserveScroll
                    class="btn join-item btn-outline"
                >
                    Next
                </Link>
                <Button v-else variant="outline" class="join-item" disabled>
                    Next
                </Button>
            </div>
        </div>
    </template>
</template>
